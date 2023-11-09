import Modal from "react-modal";
import styles from "./SettingModal.module.scss";
import { Beat, Mode, Option } from "../../../types/types";

type SettingModalProps = {
  options: Mode[] | Beat[];
  isOpen: boolean;
  onClose: () => void;
  onOptionClick: (option: Option) => void;
};

Modal.setAppElement("#root");

const SettingModal = ({
  options,
  isOpen,
  onClose,
  onOptionClick,
}: SettingModalProps) => {
  return (
    <Modal
      className={styles["modal"]}
      overlayClassName={styles["modal-overlay"]}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <div className={styles["modal-content"]}>
        {options.map((option) => {
          const optionName = typeof option === "string" ? option : option.name;
          return (
            <div
              key={optionName}
              className={styles["modal-card"]}
              onClick={() => {
                onOptionClick(option);
                onClose();
              }}
            >
              {optionName}
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default SettingModal;
