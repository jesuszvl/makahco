import classNames from "classnames";
import Image from "next/image";
import React from "react";

import { getSizeOfLongestWord } from "../../utils/randomUtils";
import styles from "./FreeStimulusContent.module.scss";

const FreeStimulusContent = ({ isImageMode, currentStimulus }) => {
  const isBigWord = getSizeOfLongestWord(currentStimulus.word) > 9;

  return (
    <div className={styles["stimulus-content"]}>
      {isImageMode ? (
        <div className={styles["stimulus-image"]}>
          <Image
            src={currentStimulus.image}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      ) : (
        <>
          <p
            className={classNames(styles["stimulus-word"], {
              [styles["stimulus-big-word"]]: isBigWord,
            })}
          >
            {currentStimulus.word}
          </p>
          <p className={styles["stimulus-word-meaning"]}>
            {currentStimulus.category}
          </p>
        </>
      )}
    </div>
  );
};

export default FreeStimulusContent;
