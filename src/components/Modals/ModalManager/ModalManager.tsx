import { useBeatStore } from "../../../store/beatStore";
import BeatModal from "../BeatModal/BeatModal";
import SettingsModal from "../SettingsModal/SettingsModal";

const ModalManager = () => {
  const modal = useBeatStore((state) => state.modal);
  const { closeModal } = useBeatStore();

  if (modal.type === "beats") {
    return <BeatModal isOpen={modal.isOpen} onClose={closeModal} />;
  }

  if (modal.type === "settings") {
    return <SettingsModal isOpen={modal.isOpen} onClose={closeModal} />;
  }

  return null;
};

export default ModalManager;
