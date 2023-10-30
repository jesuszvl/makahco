import styles from "./BeatCard.module.scss";
import { Beat } from "../../utils/beats";
import classNames from "classnames";

type BeatCardProps = {
  beat: Beat;
  isSelected?: boolean;
  onClick: () => void;
};

const BeatCard = ({ beat, isSelected, onClick }: BeatCardProps) => {
  return (
    <div className={styles.card} onClick={onClick}>
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
