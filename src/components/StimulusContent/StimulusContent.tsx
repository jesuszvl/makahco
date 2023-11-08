import { Stimulus } from "../../types/types";
import styles from "./StimulusContent.module.scss";

interface StimulusContentProps {
  stimulus: Stimulus;
  onPlay: () => void;
  onStop: () => void;
  minutes: number;
  seconds: number;
  sound: unknown;
}

const StimulusContent = ({
  stimulus,
  onPlay,
  onStop,
  sound,
  minutes,
  seconds,
}: StimulusContentProps) => {
  return (
    <div
      className={styles["stimulus-content"]}
      onClick={sound ? onStop : onPlay}
    >
      <div className={styles["stimulus-word"]}>
        <span className={styles["stimulus-words"]}>
          {stimulus.type === "image" ? (
            <div className={styles["stimulus-image"]}>
              <img
                className={styles["stimulus-image"]}
                src={stimulus.values[0]}
                alt=""
              />
            </div>
          ) : (
            stimulus.values.map((word) => {
              return <span key={word}>{word}</span>;
            })
          )}
        </span>
      </div>
      <div className="time-counter">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default StimulusContent;
