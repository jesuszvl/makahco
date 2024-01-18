import { useModalStore } from '../../../store/modalStore';
import { Mode, Modals } from '../../../types/types';
import { BEATS } from '../../../utils/beats';
import BeatModal from '../BeatModal/BeatModal';
import HelpModal from '../HelpModal/HelpModal';
import ModeModal from '../ModeModal/ModeModal';

const ModalManager = () => {
  const { isOpen, type, closeModal } = useModalStore();

  const modes: Mode[] = Object.values(Mode);

  if (type === Modals.BEAT) {
    return <BeatModal isOpen={isOpen} onClose={closeModal} beats={BEATS} />;
  }

  if (type === Modals.MODO) {
    return <ModeModal isOpen={isOpen} onClose={closeModal} modes={modes} />;
  }

  if (type === Modals.HELP) {
    return <HelpModal isOpen={isOpen} onClose={closeModal} />;
  }

  return null;
};

export default ModalManager;
