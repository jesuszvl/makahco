import { useState, useEffect } from "react";
import useSound from "use-sound";
import PageContainer from "../src/components/PageContainer/PageContainer";
import { trackPageView } from "../src/utils/analytics";

import styles from "../src/styles/Free.module.scss";
import FreeModeSelector from "../src/components/FreeModeSelector/FreeModeSelector";
import { MODES } from "../src/utils/constants";
import { getRandomSpanishWord } from "./api/randomWords";

trackPageView("/free");

const songs = [
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_1.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_2.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_3.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_4.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_5.mp3",
];

const getRandomSongUrl = () => {
  const randomIndex = Math.floor(Math.random() * songs.length);
  return songs[randomIndex];
};

export default function Free() {
  const [currentMode, setCurrentMode] = useState(MODES[0]);
  const [currentWord, setCurrentWord] = useState("-");
  const [intervalId, setIntervalId] = useState(null);
  const [play, { stop }] = useSound(getRandomSongUrl());

  useEffect(() => {
    if (intervalId) {
      const interval = setInterval(async () => {
        const randomWord = await getRandomSpanishWord();
        setCurrentWord(randomWord);
      }, 10000); // Generate a new word every 10 seconds

      return () => clearInterval(interval);
    }
  }, [intervalId]);

  const handlePlay = () => {
    play();
    setIntervalId(1);
  };

  const handleStop = () => {
    stop();
    setCurrentWord("-");
    setIntervalId(null);
  };

  const onModeClick = (mode) => {
    setCurrentMode(mode);
  };

  return (
    <PageContainer title="Makahco | Free">
      <div className="content">
        <FreeModeSelector currentMode={currentMode} onModeClick={onModeClick} />
        <div className={styles["mode-content"]}>
          <h2 className={styles["mode-word"]}>{currentWord.toUpperCase()}</h2>
        </div>
        <div className={styles["mode-controls"]}>
          {intervalId ? (
            <button className={styles["mode-button"]} onClick={handleStop}>
              Stop
            </button>
          ) : (
            <button className={styles["mode-button"]} onClick={handlePlay}>
              Play
            </button>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
