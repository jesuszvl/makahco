import { useState, useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

import PageContainer from "../src/components/PageContainer/PageContainer";
import FreeModeSelector from "../src/components/FreeModeSelector/FreeModeSelector";
import { MODES } from "../src/utils/constants";
import { getRandomSpanishWord, getRandomImage } from "./api/randomWords";
import { trackPageView } from "../src/utils/analytics";
import monkeys from "../public/monkeys.jpeg";

import styles from "../src/styles/Free.module.scss";

import classNames from "classnames";
import { getSizeOfLongestWord } from "../src/utils/randomUtils";
import FreeSoundPlayer from "../src/components/FreeSoundPlayer/FreeSoundPlayer";
import Image from "next/image";

const initialWord = { word: "-", category: "..." };
const initialBeat = { src: "", beat_drop: 10 };

export default function Free() {
  const [currentMode, setCurrentMode] = useState(MODES[0]);
  const [currentWord, setCurrentWord] = useState(initialWord);
  const [currentImage, setCurrentImage] = useState(monkeys);
  const [currentBeat, setCurrentBeat] = useState(initialBeat);

  const { seconds, minutes, totalSeconds, isRunning, start, reset } =
    useStopwatch({
      autoStart: false,
    });

  const isImageMode = currentMode.id === "IMG";

  // tracking
  useEffect(() => {
    trackPageView("/free");
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

  const isBigWord = getSizeOfLongestWord(currentWord.word) > 9;

  return (
    <PageContainer
      title="Makahco | Entrena tu free"
      description="Mejora tu freestyle con nuestros beats gratuitos y amplía tu vocabulario con nuestro generador de palabras e imágenes impulsado por IA."
    >
      <div className="content">
        <FreeModeSelector currentMode={currentMode} onModeClick={onModeClick} />
        <div className={styles["mode-content"]}>
          {isImageMode ? (
            <div className={styles["image-container"]}>
              <Image
                src={currentImage}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          ) : (
            <>
              <p
                className={classNames(styles["mode-word"], {
                  [styles["mode-big-word"]]: isBigWord,
                })}
              >
                {currentWord.word}
              </p>
              <p className={styles["mode-word-meaning"]}>
                {currentWord.category}
              </p>
            </>
          )}
        </div>
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
        />
      </div>
    </PageContainer>
  );
}
