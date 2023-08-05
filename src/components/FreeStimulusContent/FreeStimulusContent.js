import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { getSizeOfLongestWord } from "../../utils/randomUtils";
import styles from "./FreeStimulusContent.module.scss";

const FreeStimulusContent = ({ currentMode, currentWords }) => {
  const isBigWord = true; // getSizeOfLongestWord(currentStimulus.word) > 9;

  return (
    <div className={styles["stimulus-content"]}>
      <p
        className={classNames(styles["stimulus-word"], {
          [styles["stimulus-big-word"]]: isBigWord,
        })}
      >
        {currentWords.map((word) => {
          return (
            <>
              <span key={word}>{word}</span>
              <br />
            </>
          );
        })}
      </p>
    </div>
  );
};

export default FreeStimulusContent;
