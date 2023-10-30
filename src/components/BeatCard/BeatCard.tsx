import styles from "./BeatCard.module.scss";
import { Beat } from "../../utils/beats";
import classNames from "classnames";
import { useState } from "react";

type BeatCardProps = {
  beat: Beat;
};

const BeatCard = ({ beat }: BeatCardProps) => {
  const [isSelected, setSelected] = useState(false);
  return (
    <div
      className={styles.card}
      onClick={() => {
        setSelected(!isSelected);
      }}
    >
      <div
        className={classNames([
          styles.selection,
          { [styles.selected]: isSelected },
        ])}
      />
      <div className={styles.info}>
        <span className={styles.name}>{beat.name}</span>
        <span className={styles.author}>{beat.author}</span>
      </div>
    </div>
  );
};

export default BeatCard;
