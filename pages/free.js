import { useState, useEffect } from "react";
import Image from "next/image";

import PageContainer from "../src/components/PageContainer/PageContainer";
import FreeModeSelector from "../src/components/FreeModeSelector/FreeModeSelector";
import { MODES } from "../src/utils/constants";
import { getRandomSpanishWord } from "./api/randomWords";
import { trackPageView } from "../src/utils/analytics";

import { Howl } from "howler";

import styles from "../src/styles/Free.module.scss";
import playIcon from "../src/icons/PlayIcon.svg";
import stopIcon from "../src/icons/StopIcon.svg";
import classNames from "classnames";

trackPageView("/free");

const songs = [
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_1.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_2.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_3.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_4.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_5.mp3",
];

export default function Free() {
  const getRandomSongUrl = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
  };

  const [currentMode, setCurrentMode] = useState(MODES[0]);
  const [currentWord, setCurrentWord] = useState("-");
  const [intervalId, setIntervalId] = useState(null);
  const [soundId, setSoundId] = useState("");
  const [soundObj, setSoundObj] = useState(null);

  const wordInterval = currentMode.id === "FIVE" ? 5000 : 10000;

  useEffect(() => {
    if (intervalId) {
      const interval = setInterval(async () => {
        const randomWord = await getRandomSpanishWord();
        setCurrentWord(randomWord);
      }, wordInterval); // Generate a new word every 10 seconds

      return () => clearInterval(interval);
    }
  }, [intervalId, wordInterval]);

  const handlePlay = () => {
    const sound = new Howl({
      src: [getRandomSongUrl()],
      html5: true,
      volume: 0.7,
    });

    const id = sound.play();
    setSoundId(id);
    setSoundObj(sound);

    setIntervalId(1);
  };

  const handleStop = () => {
    if (soundId) {
      soundObj.stop(soundId);
    }
    setCurrentWord("-");
    setIntervalId(null);
  };

  const onModeClick = (mode) => {
    setCurrentMode(mode);
  };

  const isBigWord = currentWord.length > 10;

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
            {currentWord.toUpperCase()}
          </p>
        </div>
        <div className={styles["mode-controls"]}>
          {intervalId ? (
            <button className={styles["mode-button"]} onClick={handleStop}>
              <Image src={stopIcon} alt="Stop" width={32} height={32} />
            </button>
          ) : (
            <button className={styles["mode-button"]} onClick={handlePlay}>
              <Image src={playIcon} alt="Play" width={32} height={32} />
            </button>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
