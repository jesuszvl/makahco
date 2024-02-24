import './BeatModal.css';
import BaseModal from '../BaseModal';
import { useBeatStore } from '../../../store/beatStore';
import { useModalStore } from '../../../store/modalStore';
import { useState } from 'react';
import { BEATS } from '../../../utils/beats';

type BeatModalProps = {
  isOpen: boolean;
};

const BeatModal = ({ isOpen }: BeatModalProps) => {
  const { updateBeatIndex, beatIndex } = useBeatStore();
  const { closeModal } = useModalStore();

  const [modalBeatIndex, setModalBeatIndex] = useState(beatIndex);

  const onNext = () => {
    setModalBeatIndex((modalBeatIndex + 1) % BEATS.length);
  };

  const onPrevious = () => {
    setModalBeatIndex((modalBeatIndex - 1 + BEATS.length) % BEATS.length);
  };

  const handleClose = () => {
    setModalBeatIndex(beatIndex);
    closeModal();
  };

  const handleAccept = () => {
    updateBeatIndex(modalBeatIndex);
    closeModal();
  };

  const currentBeat = BEATS[modalBeatIndex];

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleClose}
      title={'BEAT'}
      onAccept={handleAccept}
      onNext={onNext}
      onPrevious={onPrevious}
    >
      <section className="beat">
        <span className="beat-icon">
          <currentBeat.icon width={128} height={128} />
        </span>
        <span className="beat-info">
          <h2 className="beat-title">{currentBeat.name}</h2>
        </span>
      </section>
    </BaseModal>
  );
};

export default BeatModal;
