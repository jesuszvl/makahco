import classNames from "classnames";
import Image from "next/image";

import styles from "./FreeStimulusContent.module.scss";

const FreeStimulusContent = ({ words, image }) => {
  return (
    <div className={styles["stimulus-content"]}>
      <p
        className={classNames(styles["stimulus-word"], {
          [styles["stimulus-big-word"]]: true,
        })}
      >
        <span className={styles["stimulus-words"]}>
          {image ? (
            <div className={styles["stimulus-image"]}>
              <Image src={image} layout="fill" objectFit="cover" alt="" />
            </div>
          ) : (
            words.map((word) => {
              return <span key={word}>{word}</span>;
            })
          )}
        </span>
      </p>
    </div>
  );
};

export default FreeStimulusContent;
