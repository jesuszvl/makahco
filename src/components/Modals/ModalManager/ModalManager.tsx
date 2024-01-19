import { useModalStore } from '../../../store/modalStore';
import { Modals } from '../../../types/types';
import BeatModal from '../BeatModal/BeatModal';
import ModeModal from '../ModeModal/ModeModal';

const ModalManager = () => {
  const { isOpen, type } = useModalStore();

  if (type === Modals.BEAT) {
    return <BeatModal isOpen={isOpen} />;
  }

  if (type === Modals.MODO) {
    return <ModeModal isOpen={isOpen} />;
  }

  return null;
};

export default ModalManager;
