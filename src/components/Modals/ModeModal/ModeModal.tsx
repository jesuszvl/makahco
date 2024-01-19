import './ModeModal.css';
import BaseModal from '../BaseModal';
import { useModalStore } from '../../../store/modalStore';
import { useBeatStore } from '../../../store/beatStore';
import { MODES } from '../../../utils/modes';
import { useState } from 'react';
import NextIcon from '../../../icons/NextIcon';
import PreviousIcon from '../../../icons/PreviousIcon';

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

  const currentMode = MODES[modalModeIndex];

  return (
    <BaseModal isOpen={isOpen} onClose={handleClose}>
      <h1 className="mode-modal-title">MODALIDAD</h1>
      <div className="mode-selector">
        <button className="mode-selector-button" onClick={onPrevious}>
          <PreviousIcon />
        </button>
        <section className="mode">
          <span className="mode-icon">
            <currentMode.icon width={128} height={128} />
          </span>
          <span className="mode-info">
            <h2 className="mode-title">{currentMode.name}</h2>
            <p className="mode-description">{currentMode.description}</p>
          </span>
        </section>
        <button className="mode-selector-button" onClick={onNext}>
          <NextIcon />
        </button>
      </div>
      <button
        className="mode-modal-button"
        onClick={() => {
          updateModeIndex(modalModeIndex);
          closeModal();
        }}
      >
        ACEPTAR
      </button>
    </BaseModal>
  );
};

export default ModeModal;
