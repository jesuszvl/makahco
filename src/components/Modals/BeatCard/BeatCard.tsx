import { Beat } from "../../../types/types";
import styles from "./BeatCard.module.scss";
import classNames from "classnames";

type BeatCardProps = {
  beat: Beat;
  isSelected?: boolean;
  onClick: () => void;
};

const BeatCard = ({ beat, isSelected, onClick }: BeatCardProps) => {
  return (
    <div
      className={classNames([styles.card, { [styles.selected]: isSelected }])}
      onClick={onClick}
    >
      <div className={styles.info}>
        <span className={styles.name}>{beat.name}</span>
        <span className={styles.author}>{beat.author}</span>
      </div>
    </div>
  );
};

export default BeatCard;
