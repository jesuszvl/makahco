import { Howl } from "howler";
import { useCallback, useEffect, useState } from "react";
import ModePicker from "./components/ModePicker/ModePicker";
import StimulusContent from "./components/StimulusContent/StimulusContent";
import BeatPlayer from "./components/BeatPlayer/BeatPlayer";
import { useStopwatch } from "react-timer-hook";
import { getRandomBeat, getRandomWords } from "./utils/randomUtils";
import { createApi } from "unsplash-js";

export interface Mode {
  id: string;
  label: string;
}

const MODES: Array<Mode> = [
  { id: "IZI", label: "Clásico" },
  { id: "4FB", label: "4 x Barra" },
  { id: "IMG", label: "Imágenes" },
];

const initialBeat = { src: "", beat_drop: 10 };

const unsplash = createApi({
  accessKey: "XQUR9hAy9HQRFMAyzLhsIbz6U_M9tfEa5R_kMJvXc08",
});

const App = () => {
  const [mode, setMode] = useState(MODES[0]);
  const [words, setWords] = useState([]);
  const [beat, setBeat] = useState(initialBeat);
  const [sound, setSound] = useState(null);
  const [image, setImage] = useState(null);

  const { seconds, minutes, totalSeconds, start, reset } = useStopwatch({
    autoStart: false,
  });

  const isImageMode = mode.id === "IMG";
  const is4FBMode = mode.id === "4FB";

  // Countdown effect
  useEffect(() => {
    const fetchNewStimulus = async () => {
      if (isImageMode) {
        unsplash.photos.getRandom().then((res) => {
          if (!res.errors) {
            const randomImage = res.response;
            setImage(randomImage.urls.regular);
          }
        });
      } else {
        const randomWords = await getRandomWords(is4FBMode ? 4 : 1);
        setWords(randomWords);
      }
    };

    const countdownSeconds = beat.beat_drop - totalSeconds;

    // Are you ready?
    if (totalSeconds > 1 && countdownSeconds === 10) {
      setWords(["¿LISTO?"]);
    }

    // Se lo damos en...
    if (countdownSeconds >= 1 && countdownSeconds <= 3) {
      setWords([countdownSeconds.toString()]);
    }

    // Tiempo
    if (countdownSeconds === 0 && totalSeconds === beat.beat_drop) {
      setWords(["¡TIEMPO!"]);
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
    setBeat(initialBeat);
    setWords([]);
    reset(0, false);
    setImage(null);
  });

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
    <div className="container">
      <header>
        <span>makahco</span>
      </header>
      <main>
        <div className="free">
          <ModePicker
            modes={MODES}
            currentMode={mode}
            onModeClick={(mode) => {
              setMode(mode);
            }}
          />
          <StimulusContent words={words} image={image} />
          <p className="time-counter">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
          <BeatPlayer onPlay={handlePlay} onStop={handleStop} sound={sound} />
        </div>
      </main>
      <footer>
        <span>
          desarrollado por{" "}
          <a href="https://zvl.dev" className="footer-link">
            zvl.dev
          </a>
        </span>
      </footer>
    </div>
  );
};

export default App;
