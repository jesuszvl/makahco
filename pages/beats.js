import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

import FreeModeSelector from "../src/components/FreeModeSelector/FreeModeSelector";
import FreeSoundPlayer from "../src/components/FreeSoundPlayer/FreeSoundPlayer";
import FreeStimulusContent from "../src/components/FreeStimulusContent/FreeStimulusContent";
import LoginModal from "../src/components/LoginModal/LoginModal";
import PageContainer from "../src/components/PageContainer/PageContainer";
import styles from "../src/styles/Free.module.scss";
import { trackPageView } from "../src/utils/analytics";
import { MODES } from "../src/utils/constants";
import { getRandomFour, getRandomSpanishWord } from "./api/randomWords";

const initialBeat = { src: "", beat_drop: 10 };

export default function Beats() {
  const [currentMode, setCurrentMode] = useState(MODES[0]);
  const [currentWords, setCurrentWords] = useState([]);
  const [currentBeat, setCurrentBeat] = useState(initialBeat);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const { seconds, minutes, totalSeconds, start, reset } = useStopwatch({
    autoStart: false,
  });

  const is4FBMode = currentMode.id === "4FB";

  // tracking
  useEffect(() => {
    trackPageView("/beats");
  }, []);

  // Countdown effect
  useEffect(() => {
    const fetchNewStimulus = async () => {
      if (is4FBMode) {
        const randomFour = await getRandomFour();
        setCurrentWords(randomFour);
      } else {
        const randomWord = await getRandomSpanishWord();
        setCurrentWords(randomWord);
      }
    };

    const countdownSeconds = currentBeat.beat_drop - totalSeconds;

    // Are you ready?
    if (totalSeconds > 1 && countdownSeconds === 10) {
      setCurrentWords(["¿LISTO?"]);
    }

    // Se lo damos en...
    if (countdownSeconds >= 1 && countdownSeconds <= 3) {
      setCurrentWords([countdownSeconds.toString()]);
    }

    // Tiempo
    if (countdownSeconds === 0 && totalSeconds === currentBeat.beat_drop) {
      setCurrentWords(["¡TIEMPO!"]);
    }

    // Fetching palabras
    if (
      (countdownSeconds < 0 && totalSeconds === currentBeat.beat_drop + 1) ||
      (totalSeconds > currentBeat.beat_drop &&
        countdownSeconds % currentBeat.spb === 0)
    ) {
      fetchNewStimulus();
    }
  }, [totalSeconds, currentBeat, is4FBMode]);

  const onModeClick = (mode) => {
    setCurrentMode(mode);
  };

  const onWordClear = () => {
    setCurrentWords([]);
  };

  const onDisabledClick = () => {
    setIsOpen(true);
  };

  return (
    <PageContainer
      title="Makahco | Beats"
      description="Mejora tu freestyle con nuestros beats gratuitos y amplía tu vocabulario con nuestro generador de palabras e imágenes impulsado por IA."
    >
      <div className="beat-content">
        <div className={styles["free-container"]}>
          <FreeModeSelector
            currentMode={currentMode}
            onModeClick={onModeClick}
          />
          <FreeStimulusContent
            currentMode={currentMode}
            currentWords={currentWords}
          />
          <p className={styles["time-counter"]}>
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </p>
          <FreeSoundPlayer
            onWordClear={onWordClear}
            onPlay={(newBeat) => {
              setCurrentBeat(newBeat);
              start();
            }}
            onStop={() => {
              reset(0, false);
            }}
            isDisabled={!isLoggedIn}
            onDisabledClick={onDisabledClick}
          />
        </div>
      </div>
      <LoginModal
        isOpen={isOpen}
        onHide={() => {
          setIsOpen(false);
        }}
      />
    </PageContainer>
  );
}
