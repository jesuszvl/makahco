import { Howl } from "howler";

import { useCallback, useEffect, useState } from "react";
import { MODES, Mode } from "./components/ModePicker/ModePicker";
import StimulusContent from "./components/StimulusContent/StimulusContent";
import BeatPlayer from "./components/BeatPlayer/BeatPlayer";
import { useStopwatch } from "react-timer-hook";
import PageContainer from "./components/PageContainer/PageContainer";
import {
  STIMULUS_INITIAL,
  Stimulus,
  getRandomImage,
  getRandomWords,
} from "./utils/stimulus";
import BeatModal from "./components/BeatModal/BeatModal";
import { useBeatStore } from "./store/beatStore";

const App = () => {
  const { beat } = useBeatStore();
  const [mode, setMode] = useState<Mode>(MODES[0]);
  const [sound, setSound] = useState<Howl | null>(null);
  const [stimulus, setStimulus] = useState<Stimulus>(STIMULUS_INITIAL);
  const [modalIsOpen, setIsOpen] = useState(false);

  const { seconds, minutes, totalSeconds, start, reset } = useStopwatch({
    autoStart: false,
  });

  const isImageMode = mode.id === "IMG";
  const is4FBMode = mode.id === "4FB";

  // Countdown effect
  useEffect(() => {
    const fetchNewStimulus = async () => {
      if (isImageMode) {
        const randomImage = await getRandomImage();
        setStimulus({ type: "image", values: [randomImage] });
      } else {
        const randomWords = await getRandomWords(is4FBMode ? 4 : 1);
        setStimulus({ type: "word", values: randomWords });
      }
    };

    const countdownSeconds = beat.beat_drop - totalSeconds;

    // Are you ready?
    if (totalSeconds > 1 && countdownSeconds === 10) {
      setStimulus({ type: "word", values: ["¿ESTAS LISTO?"] });
    }

    // Se lo damos en...3, 2, 1
    if (countdownSeconds >= 2 && countdownSeconds <= 4) {
      setStimulus({
        type: "word",
        values: [(countdownSeconds - 1).toString()],
      });
    }

    // Fetching palabras
    if (
      (countdownSeconds < 0 && totalSeconds === beat.beat_drop + 1) ||
      (totalSeconds > beat.beat_drop && countdownSeconds % beat.spb === 0)
    ) {
      fetchNewStimulus();
    }
  }, [totalSeconds, beat, is4FBMode, isImageMode]);

  const handleStop = useCallback(() => {
    if (sound) sound.stop();
    setSound(null);
    setStimulus(STIMULUS_INITIAL);
    reset(new Date(0), false);
  }, [sound, reset]);

  const handlePlay = () => {
    const howlerSound = new Howl({
      src: [beat.src],
      html5: true,
      volume: 0.5,
    });

    howlerSound.play();
    start();

    setSound(howlerSound);

    // Fires when the sound finishes playing.
    howlerSound.on("end", function () {
      handleStop();
    });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <PageContainer>
      <BeatModal
        isOpen={modalIsOpen}
        onClose={() => {
          closeModal();
        }}
      />
      <div className="free">
        <StimulusContent stimulus={stimulus} />
        <div className="time-counter">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </div>
        <BeatPlayer
          onPlay={handlePlay}
          onStop={handleStop}
          sound={sound}
          onMusic={() => {
            openModal();
          }}
          onSettings={() => {
            console.log("opening settings");
          }}
        />
      </div>
    </PageContainer>
  );
};

export default App;
