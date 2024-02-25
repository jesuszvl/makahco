import './ModeModal.css';
import BaseModal from '../BaseModal/BaseModal';
import { useModalStore } from '../../../store/modalStore';
import { useBeatStore } from '../../../store/beatStore';
import { MODES } from '../../../utils/modes';
import { useState } from 'react';

type ModeModalProps = {
  isOpen: boolean;
};

const ModeModal = ({ isOpen }: ModeModalProps) => {
  const { updateModeIndex, modeIndex } = useBeatStore();
  const { closeModal } = useModalStore();

  const [modalModeIndex, setModalModeIndex] = useState(modeIndex);

  const onNext = () => {
    setModalModeIndex((modalModeIndex + 1) % MODES.length);
  };

  const onPrevious = () => {
    setModalModeIndex((modalModeIndex - 1 + MODES.length) % MODES.length);
  };

  const handleClose = () => {
    setModalModeIndex(modeIndex);
    closeModal();
  };

  const handleAccept = () => {
    updateModeIndex(modalModeIndex);
    closeModal();
  };

  const currentMode = MODES[modalModeIndex];

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleClose}
      title={'MODALIDAD'}
      onAccept={handleAccept}
      onNext={onNext}
      onPrevious={onPrevious}
    >
      <section className="mode">
        <span className="mode-icon">
          <currentMode.icon width={128} height={128} />
        </span>
        <span className="mode-info">
          <h2 className="mode-title">{currentMode.name}</h2>
          <p className="mode-description">{currentMode.description}</p>
        </span>
      </section>
    </BaseModal>
  );
};

export default ModeModal;
