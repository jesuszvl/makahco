import { useState, useEffect } from "react";
import Image from "next/image";

import PageContainer from "../src/components/PageContainer/PageContainer";
import FreeModeSelector from "../src/components/FreeModeSelector/FreeModeSelector";
import { MODES } from "../src/utils/constants";
import { getRandomSpanishWord } from "./api/randomWords";
import { trackPageView } from "../src/utils/analytics";

import styles from "../src/styles/Free.module.scss";

import classNames from "classnames";
import { getSizeOfLongestWord } from "../src/utils/randomUtils";
import FreeSoundPlayer from "../src/components/FreeSoundPlayer/FreeSoundPlayer";

const initialWord = { word: "-", category: "..." };

export default function Free() {
  const [currentMode, setCurrentMode] = useState(MODES[0]);
  const [currentWord, setCurrentWord] = useState(initialWord);
  const [intervalId, setIntervalId] = useState(null);

  const wordInterval = currentMode.id === "FIVE" ? 5000 : 10000;

  useEffect(() => {
    trackPageView("/free");
  }, []);

  useEffect(() => {
    if (intervalId) {
      const interval = setInterval(async () => {
        const randomWord = await getRandomSpanishWord();
        setCurrentWord(randomWord);
      }, wordInterval);

      return () => clearInterval(interval);
    }
  }, [intervalId, wordInterval]);

  const onModeClick = (mode) => {
    setCurrentMode(mode);
  };

  const onWordClear = () => {
    setCurrentWord(initialWord);
    setIntervalId(null);
  };

  const isBigWord = getSizeOfLongestWord(currentWord.word) > 9;

  return (
    <PageContainer title="Makahco | Free">
      <div className="content">
        <FreeModeSelector currentMode={currentMode} onModeClick={onModeClick} />
        <div className={styles["mode-content"]}>
          <p
            className={classNames(styles["mode-word"], {
              [styles["mode-big-word"]]: isBigWord,
            })}
          >
            {currentWord.word}
          </p>
          <p className={styles["mode-word-meaning"]}>{currentWord.category}</p>
        </div>
        <FreeSoundPlayer
          onWordClear={onWordClear}
          onPlay={() => setIntervalId(1)}
        />
      </div>
    </PageContainer>
  );
}
