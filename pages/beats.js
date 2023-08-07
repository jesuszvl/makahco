import { Howl } from "howler";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

import FreeModeSelector from "../src/components/FreeModeSelector/FreeModeSelector";
import FreeSoundPlayer from "../src/components/FreeSoundPlayer/FreeSoundPlayer";
import FreeStimulusContent from "../src/components/FreeStimulusContent/FreeStimulusContent";
import PageContainer from "../src/components/PageContainer/PageContainer";
import styles from "../src/styles/Free.module.scss";
import { trackPageView } from "../src/utils/analytics";
import { MODES } from "../src/utils/constants";
import { getRandomBeat } from "../src/utils/randomUtils";
import { getRandomWords } from "./api/random";

const initialBeat = { src: "", beat_drop: 10 };

export default function Beats() {
  const [mode, setMode] = useState(MODES[0]);
  const [words, setWords] = useState([]);
  const [beat, setBeat] = useState(initialBeat);
  const [sound, setSound] = useState(null);

  const { seconds, minutes, totalSeconds, start, reset } = useStopwatch({
    autoStart: false,
  });

  const is4FBMode = mode.id === "4FB";

  const handleStop = useCallback(() => {
    console.log("stopping");
    if (sound) sound.stop();
    setSound(null);
    setBeat(initialBeat);
    setWords([]);
    reset(0, false);
  });

  // tracking
  useEffect(() => {
    trackPageView("/beats");
  }, []);

  // Countdown effect
  useEffect(() => {
    const fetchNewStimulus = async () => {
      const randomWords = await getRandomWords(is4FBMode ? 4 : 1);
      setWords(randomWords);
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
  }, [totalSeconds, beat, is4FBMode]);

  const onModeClick = (newMode) => {
    setMode(newMode);
  };

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
    <PageContainer
      title="Makahco | Beats"
      description="Mejora tu freestyle con nuestros beats gratuitos y amplía tu vocabulario con nuestro generador de palabras e imágenes impulsado por IA."
    >
      <div className="beat-content">
        <div className={styles["free-container"]}>
          <FreeModeSelector currentMode={mode} onModeClick={onModeClick} />
          <FreeStimulusContent words={words} />
          <p className={styles["time-counter"]}>
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
          <FreeSoundPlayer
            onPlay={handlePlay}
            onStop={handleStop}
            sound={sound}
          />
        </div>
      </div>
    </PageContainer>
  );
}
