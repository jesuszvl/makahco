import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

import monkeys from "../public/monkeys.jpeg";
import FreeModeSelector from "../src/components/FreeModeSelector/FreeModeSelector";
import FreeSoundPlayer from "../src/components/FreeSoundPlayer/FreeSoundPlayer";
import FreeStimulusContent from "../src/components/FreeStimulusContent/FreeStimulusContent";
import LoginModal from "../src/components/LoginModal/LoginModal";
import PageContainer from "../src/components/PageContainer/PageContainer";
import styles from "../src/styles/Free.module.scss";
import { trackPageView } from "../src/utils/analytics";
import { MODES } from "../src/utils/constants";
import { supabaseClient } from "../src/utils/supabaseClient";
import { getRandomImage, getRandomSpanishWord } from "./api/randomWords";

const initialWord = { word: "", category: "..." };
const initialBeat = { src: "", beat_drop: 10 };

export default function Beats() {
  const [currentMode, setCurrentMode] = useState(MODES[0]);
  const [currentWord, setCurrentWord] = useState(initialWord);
  const [currentImage, setCurrentImage] = useState(monkeys);
  const [currentBeat, setCurrentBeat] = useState(initialBeat);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { seconds, minutes, totalSeconds, isRunning, start, reset } =
    useStopwatch({
      autoStart: false,
    });

  const isImageMode = currentMode.id === "IMG";

  // tracking
  useEffect(() => {
    trackPageView("/beats");
  }, []);

  // session
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabaseClient.auth.getUser();
      if (user) {
        setIsLoggedIn(true);
      }
    };
    fetchUser();
  }, []);

  //Magic Link Login Side Effect
  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      // handle auth state changes
      if (event === "SIGNED_IN") {
        // user signed in
        console.log("logged in");
      }
    });
  }, []);

  // Countdown effect
  useEffect(() => {
    const fetchNewStimulus = async () => {
      if (isImageMode) {
        const randomImage = await getRandomImage();
        setCurrentImage(randomImage);
      } else {
        const randomWord = await getRandomSpanishWord();
        setCurrentWord(randomWord);
      }
    };

    const countdownSeconds = currentBeat.beat_drop - totalSeconds;

    if (totalSeconds > 1 && countdownSeconds === 10) {
      setCurrentWord({ word: "¿LISTO?", category: "" });
    }

    if (countdownSeconds >= 1 && countdownSeconds <= 3) {
      setCurrentWord({ word: countdownSeconds.toString(), category: "" });
    }

    if (
      totalSeconds > currentBeat.beat_drop &&
      countdownSeconds % currentBeat.spb === 0
    ) {
      fetchNewStimulus();
    }

    if (totalSeconds === currentBeat.beat_drop) {
      fetchNewStimulus();
    }
  }, [totalSeconds, currentBeat, isImageMode]);

  const onModeClick = (mode) => {
    setCurrentMode(mode);
  };

  const onWordClear = () => {
    setCurrentWord(initialWord);
    setCurrentImage(monkeys);
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
            isImageMode={isImageMode}
            currentStimulus={currentWord}
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
