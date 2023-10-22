import PlayIcon from "../../icons/PlayIcon";
import StopIcon from "../../icons/StopIcon";
import styles from "./BeatPlayer.module.scss";

type BeatPlayerProps = {
  onPlay: () => void;
  onStop: () => void;
  sound: unknown;
};

const BeatPlayer = ({ onPlay, onStop, sound }: BeatPlayerProps) => {
  return (
    <div className={styles["sound-player"]}>
      {sound ? (
        <button
          className={styles["player-button"]}
          onClick={onStop}
          aria-label="stop"
        >
          <StopIcon />
        </button>
      ) : (
        <button
          className={styles["player-button"]}
          onClick={onPlay}
          aria-label="play"
        >
          <PlayIcon />
        </button>
      )}
    </div>
  );
};

export default BeatPlayer;
