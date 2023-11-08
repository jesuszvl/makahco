import Modal from "react-modal";
import styles from "./SettingsModal.module.scss";
import { Mode, useBeatStore } from "../../../store/beatStore";

type SettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MODES: Mode[] = ["clásico", "terminaciones", "visuales"];

const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  const { mode: currentMode, updateMode } = useBeatStore();
  return (
    <Modal
      className={styles["modal"]}
      overlayClassName={styles["modal-overlay"]}
      isOpen={isOpen}
    >
      <div className={styles["modal-header"]}>ELIGE UN MODO</div>
      <div className={styles["modal-content"]}>
        {MODES.map((mode) => {
          return (
            <div className={styles["modal-card"]} key={mode}>
              {mode}
            </div>
          );
        })}
      </div>

      <div className={styles["modal-action"]} onClick={onClose}>
        CERRAR
      </div>
    </Modal>
  );
};

export default SettingsModal;
