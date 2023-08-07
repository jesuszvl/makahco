import PlayIcon from "../../icons/PlayIcon";
import StopIcon from "../../icons/StopIcon";
import styles from "./FreeSoundPlayer.module.scss";

const FreeSoundPlayer = ({ onPlay, onStop, sound }) => {
  return (
    <div className={styles["sound-player"]}>
      {sound ? (
        <button className={styles["player-button"]} onClick={onStop}>
          <StopIcon stroke="#000000" />
        </button>
      ) : (
        <button className={styles["player-button"]} onClick={onPlay}>
          <PlayIcon stroke="#000000" />
        </button>
      )}
    </div>
  );
};

export default FreeSoundPlayer;
