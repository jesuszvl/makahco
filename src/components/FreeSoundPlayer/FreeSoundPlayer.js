import React, { useState } from "react";
import styles from "./FreeSoundPlayer.module.scss";

import PlayIcon from "../../icons/PlayIcon";
import StopIcon from "../../icons/StopIcon";

import { Howl } from "howler";

const songs = [
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_1.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_2.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_3.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_4.mp3",
  "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_5.mp3",
];

const FreeSoundPlayer = ({ onPlay, onWordClear }) => {
  const getRandomSongUrl = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
  };

  const [soundId, setSoundId] = useState("");
  const [soundObj, setSoundObj] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const sound = new Howl({
      src: [getRandomSongUrl()],
      html5: true,
      volume: 0.7,
    });

    const id = sound.play();
    onPlay();

    setSoundId(id);
    setSoundObj(sound);
    setIsPlaying(true);

    // Fires when the sound finishes playing.
    sound.on("end", function () {
      onWordClear();
    });
  };

  const handleStop = () => {
    if (soundId) {
      soundObj.stop(soundId);
    }
    setIsPlaying(false);
    onWordClear();
  };

  return (
    <div className={styles["sound-player"]}>
      {isPlaying ? (
        <button className={styles["player-button"]} onClick={handleStop}>
          <StopIcon />
        </button>
      ) : (
        <button className={styles["player-button"]} onClick={handlePlay}>
          <PlayIcon />
        </button>
      )}
    </div>
  );
};

export default FreeSoundPlayer;
