import { Howl } from "howler";
import { useCallback, useEffect, useState } from "react";
import ModePicker, { MODES, Mode } from "./components/ModePicker/ModePicker";
import StimulusContent from "./components/StimulusContent/StimulusContent";
import BeatPlayer from "./components/BeatPlayer/BeatPlayer";
import { useStopwatch } from "react-timer-hook";
import { createApi } from "unsplash-js";
import { BEAT_INITIAL, Beat, getRandomBeat } from "./utils/beats";
import PageContainer from "./components/PageContainer/PageContainer";
import { STIMULUS_INITIAL, Stimulus, getRandomWords } from "./utils/stimulus";

const unsplash = createApi({
  accessKey: "XQUR9hAy9HQRFMAyzLhsIbz6U_M9tfEa5R_kMJvXc08",
});

const App = () => {
  const [mode, setMode] = useState<Mode>(MODES[0]);
  const [beat, setBeat] = useState<Beat>(BEAT_INITIAL);
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
        unsplash.photos.getRandom({}).then((res) => {
          if (!res.errors) {
            const randomImage = Array.isArray(res.response)
              ? res.response[0]
              : res.response;
            setStimulus({ type: "image", values: [randomImage.urls.small] });
          }
        });
      } else {
        const randomWords = await getRandomWords(is4FBMode ? 4 : 1);
        setStimulus({ type: "word", values: randomWords });
      }
    };

    const countdownSeconds = beat.beat_drop - totalSeconds;

    // Are you ready?
    if (totalSeconds > 1 && countdownSeconds === 10) {
      setStimulus({ type: "word", values: ["¿LISTO?"] });
    }

    // Se lo damos en...3, 2, 1
    if (countdownSeconds >= 1 && countdownSeconds <= 3) {
      setStimulus({ type: "word", values: [countdownSeconds.toString()] });
    }

    // Tiempo!
    if (countdownSeconds === 0 && totalSeconds === beat.beat_drop) {
      setStimulus({ type: "word", values: ["¡TIEMPO!"] });
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
    setBeat(BEAT_INITIAL);
    setStimulus(STIMULUS_INITIAL);
    reset(new Date(0), false);
  }, [sound, reset]);

  const handlePlay = () => {
    const newBeat = getRandomBeat();
    const howlerSound = new Howl({
      src: [newBeat.src],
      html5: true,
      volume: 0.5,
    });

    howlerSound.play();
    start();

    setSound(howlerSound);
    setBeat(newBeat);

    // Fires when the sound finishes playing.
    howlerSound.on("end", function () {
      handleStop();
    });
  };

  return (
    <PageContainer>
      <div className="free">
        <ModePicker
          currentMode={mode}
          onModeClick={(mode) => {
            setMode(mode);
          }}
        />
        <StimulusContent stimulus={stimulus} />
        <div className="time-counter">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </div>
        <BeatPlayer onPlay={handlePlay} onStop={handleStop} sound={sound} />
      </div>
    </PageContainer>
  );
};

export default App;
