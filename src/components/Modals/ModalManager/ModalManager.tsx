import { useBeatStore } from "../../../store/beatStore";
import { Mode, Option } from "../../../types/types";
import { BEATS } from "../../../utils/beats";
import SettingModal from "../SettingModal/SettingModal";

const ModalManager = () => {
  const modal = useBeatStore((state) => state.modal);
  const { closeModal, updateBeat, updateMode } = useBeatStore();

  const modes: Mode[] = ["clásico", "terminaciones", "visuales"];

  if (modal.type === "beats") {
    return (
      <SettingModal
        isOpen={modal.isOpen}
        onClose={closeModal}
        options={BEATS}
        onOptionClick={(option: Option) => {
          if (typeof option !== "string") {
            updateBeat(option);
          }
        }}
      />
    );
  }

  if (modal.type === "mode") {
    return (
      <SettingModal
        isOpen={modal.isOpen}
        onClose={closeModal}
        options={modes}
        onOptionClick={(option: Option) => {
          if (typeof option === "string") {
            updateMode(option);
          }
        }}
      />
    );
  }

  return null;
};

export default ModalManager;
