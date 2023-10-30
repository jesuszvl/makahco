import Modal from "react-modal";
import CloseIcon from "../../icons/CloseIcon";
import styles from "./BeatModal.module.scss";
import BaseButton from "../BaseButton/BaseButton";
import { BEATS } from "../../utils/beats";
import BeatCard from "../BeatCard/BeatCard";
import { useBeatStore } from "../../store/beatStore";

type BeatModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BeatModal = ({ isOpen, onClose }: BeatModalProps) => {
  const { beat: currentBeat, updateBeat } = useBeatStore();
  return (
    <Modal
      className={styles["modal"]}
      overlayClassName={styles["modal-overlay"]}
      isOpen={isOpen}
    >
      <div className={styles["modal-header"]}>ELIGE UN BEAT</div>
      <div className={styles["modal-content"]}>
        {BEATS.map((beat) => {
          return (
            <BeatCard
              key={beat.name}
              beat={beat}
              isSelected={currentBeat.src === beat.src}
              onClick={() => {
                updateBeat(beat);
              }}
            />
          );
        })}
      </div>

      <div className={styles["modal-action"]}>
        <BaseButton onClick={onClose} icon={<CloseIcon />}></BaseButton>
      </div>
    </Modal>
  );
};

export default BeatModal;
