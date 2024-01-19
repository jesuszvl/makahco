import './BeatModal.css';
import { Beat } from '../../../types/types';
import BaseModal from '../BaseModal';
import { useBeatStore } from '../../../store/beatStore';
import { useModalStore } from '../../../store/modalStore';
import { useState } from 'react';
import NextIcon from '../../../icons/NextIcon';
import PreviousIcon from '../../../icons/PreviousIcon';
import { BEATS } from '../../../utils/beats';

type BeatModalProps = {
  beats: Beat[];
  isOpen: boolean;
  onClose: () => void;
};

const BeatModal = ({ isOpen, onClose }: BeatModalProps) => {
  const { updateBeatIndex, beatIndex } = useBeatStore();
  const { closeModal } = useModalStore();

  const [modalBeatIndex, setModalBeatIndex] = useState(beatIndex);

  const onNext = () => {
    setModalBeatIndex((modalBeatIndex + 1) % BEATS.length);
  };

  const onPrevious = () => {
    setModalBeatIndex((modalBeatIndex - 1 + BEATS.length) % BEATS.length);
  };

  const currentBeat = BEATS[modalBeatIndex];

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h1 className="beat-modal-title">TIPO DE BEAT</h1>
      <div className="beat-selector">
        <button className="beat-selector-button" onClick={onPrevious}>
          <PreviousIcon />
        </button>
        <section className="beat">
          <span className="beat-icon">
            <currentBeat.icon width={128} height={128} />
          </span>
          <span className="beat-info">
            <h2 className="beat-title">{currentBeat.name}</h2>
          </span>
        </section>
        <button className="beat-selector-button" onClick={onNext}>
          <NextIcon />
        </button>
      </div>
      <button
        className="beat-modal-button"
        onClick={() => {
          updateBeatIndex(modalBeatIndex);
          closeModal();
        }}
      >
        ACEPTAR
      </button>
    </BaseModal>
  );
};

export default BeatModal;
