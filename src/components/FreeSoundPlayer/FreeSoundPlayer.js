import React, { useState } from "react";
import styles from "./FreeSoundPlayer.module.scss";

import PlayIcon from "../../icons/PlayIcon";
import StopIcon from "../../icons/StopIcon";

import { Howl } from "howler";

const songs = [
  {
    src: "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_1.mp3",
    beat_drop: 20,
    bpm: 94,
    spb: 10,
  },
  {
    src: "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_2.mp3",
    beat_drop: 24,
    bpm: 80,
    spb: 12,
  },
  {
    src: "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_3.mp3",
    beat_drop: 24,
    bpm: 81,
    spb: 12,
  },
  {
    src: "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_4.mp3",
    beat_drop: 20,
    bpm: 92,
    spb: 12,
  },
  {
    src: "https://kigaieivrduiqliboora.supabase.co/storage/v1/object/public/beats/base_5.mp3",
    beat_drop: 18,
    bpm: 100,
    spb: 10,
  },
];

const FreeSoundPlayer = ({ onPlay, onStop, onWordClear }) => {
  const getRandomBeat = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
  };

  const [soundId, setSoundId] = useState("");
  const [soundObj, setSoundObj] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const newBeat = getRandomBeat();
    const sound = new Howl({
      src: [newBeat.src],
      html5: true,
      volume: 0.7,
    });

    const id = sound.play();
    onPlay(newBeat);

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
    onStop();
  };

  return (
    <div className={styles["sound-player"]}>
      {isPlaying ? (
        <button className={styles["player-button"]} onClick={handleStop}>
          <StopIcon stroke="#000000" />
        </button>
      ) : (
        <button className={styles["player-button"]} onClick={handlePlay}>
          <PlayIcon stroke="#000000" />
        </button>
      )}
    </div>
  );
};

export default FreeSoundPlayer;
