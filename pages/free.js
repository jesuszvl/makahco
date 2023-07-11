import { useState, useEffect } from "react";

import PageContainer from "../src/components/PageContainer/PageContainer";
import FreeModeSelector from "../src/components/FreeModeSelector/FreeModeSelector";
import { MODES } from "../src/utils/constants";
import { getRandomSpanishWord } from "./api/randomWords";
import { trackPageView } from "../src/utils/analytics";

import styles from "../src/styles/Free.module.scss";

import classNames from "classnames";
import { getSizeOfLongestWord } from "../src/utils/randomUtils";
import FreeSoundPlayer from "../src/components/FreeSoundPlayer/FreeSoundPlayer";
import { supabaseClient } from "../src/utils/supabaseClient";

const initialWord = { word: "-", category: "..." };

export default function Free() {
  const [currentMode, setCurrentMode] = useState(MODES[0]);
  const [currentWord, setCurrentWord] = useState(initialWord);
  const [intervalId, setIntervalId] = useState(null);

  const wordInterval = currentMode.id === "FIVE" ? 5000 : 10000;

  const fetchBeats = async () => {
    // const { data, error } = await supabaseClient.from("beats").select();
    // if (error) {
    //   console.error(error);
    // } else {
    //   console.log(data);
    // }
  };

  useEffect(() => {
    trackPageView("/free");
    fetchBeats();
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
    <PageContainer
      title="Makahco | Entrena tu free"
      description="Mejora tu freestyle con nuestros beats gratuitos y amplía tu vocabulario con nuestro generador de palabras e imágenes impulsado por IA."
    >
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
