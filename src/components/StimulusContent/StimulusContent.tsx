import styles from "./StimulusContent.module.scss";

const StimulusContent = ({ words, image }) => {
  return (
    <div className={styles["stimulus-content"]}>
      <div className={styles["stimulus-word"]}>
        <span className={styles["stimulus-words"]}>
          {image ? (
            <div className={styles["stimulus-image"]}>
              <img className={styles["stimulus-image"]} src={image} alt="" />
            </div>
          ) : (
            words.map((word) => {
              return <span key={word}>{word}</span>;
            })
          )}
        </span>
      </div>
    </div>
  );
};

export default StimulusContent;
