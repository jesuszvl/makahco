import PlayIcon from "../../icons/PlayIcon";
import StopIcon from "../../icons/StopIcon";
import styles from "./BeatPlayer.module.scss";

const BeatPlayer = ({ onPlay, onStop, sound }) => {
  return (
    <div className={styles["sound-player"]}>
      {sound ? (
        <button className={styles["player-button"]} onClick={onStop}>
          <StopIcon />
        </button>
      ) : (
        <button className={styles["player-button"]} onClick={onPlay}>
          <PlayIcon />
        </button>
      )}
    </div>
  );
};

export default BeatPlayer;
