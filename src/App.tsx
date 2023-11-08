import { Howl } from "howler";

import { useCallback, useEffect, useState } from "react";
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
import { useBeatStore } from "./store/beatStore";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import BeatSelector from "./components/BeatSelector/BeatSelector";
import SettingSelector from "./components/SettingSelector/SettingSelector";

const App = () => {
  const { beat, mode, openModal } = useBeatStore();
  const [sound, setSound] = useState<Howl | null>(null);
  const [stimulus, setStimulus] = useState<Stimulus>(STIMULUS_INITIAL);

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

  const onStop = useCallback(() => {
    if (sound) sound.stop();
    setSound(null);
    setStimulus(STIMULUS_INITIAL);
    reset(new Date(0), false);
  }, [sound, reset]);

  const onPlay = () => {
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
      onStop();
    });
  };

  return (
    <PageContainer>
      <div className="free">
        <SettingSelector
          setting={beat.name}
          onBack={() => {
            console.log("back beat");
          }}
          onNext={() => {
            console.log("next beat");
          }}
          onSettingClick={() => {
            openModal("beats");
          }}
        />
        <StimulusContent
          stimulus={stimulus}
          onPlay={onPlay}
          onStop={onStop}
          sound={sound}
          minutes={minutes}
          seconds={seconds}
        />
        <SettingSelector
          setting={mode}
          onBack={() => {
            console.log("back mode");
          }}
          onNext={() => {
            console.log("next mode");
          }}
          onSettingClick={() => {
            openModal("settings");
          }}
        />
      </div>
    </PageContainer>
  );
};

export default App;
