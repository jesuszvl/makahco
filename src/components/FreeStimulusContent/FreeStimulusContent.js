import classNames from "classnames";

import styles from "./FreeStimulusContent.module.scss";

const FreeStimulusContent = ({ words }) => {
  return (
    <div className={styles["stimulus-content"]}>
      <p
        className={classNames(styles["stimulus-word"], {
          [styles["stimulus-big-word"]]: true,
        })}
      >
        <span className={styles["stimulus-words"]}>
          {words.map((word) => {
            return <span key={word}>{word}</span>;
          })}
        </span>
      </p>
    </div>
  );
};

export default FreeStimulusContent;
