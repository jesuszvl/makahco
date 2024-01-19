import { useModalStore } from '../../../store/modalStore';
import { Modals } from '../../../types/types';
import { BEATS } from '../../../utils/beats';
import { MODES } from '../../../utils/modes';
import BeatModal from '../BeatModal/BeatModal';
import HelpModal from '../HelpModal/HelpModal';
import ModeModal from '../ModeModal/ModeModal';

const ModalManager = () => {
  const { isOpen, type, closeModal } = useModalStore();

  if (type === Modals.BEAT) {
    return <BeatModal isOpen={isOpen} onClose={closeModal} beats={BEATS} />;
  }

  if (type === Modals.MODO) {
    return <ModeModal isOpen={isOpen} onClose={closeModal} modes={MODES} />;
  }

  if (type === Modals.HELP) {
    return <HelpModal isOpen={isOpen} onClose={closeModal} />;
  }

  return null;
};

export default ModalManager;
