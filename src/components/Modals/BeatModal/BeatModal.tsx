import './BeatModal.css';
import { Beat } from '../../../types/types';
import BaseModal from '../BaseModal';
import ReggaeIcon from '../../../icons/ReggaeIcon';

type BeatModalProps = {
  beats: Beat[];
  isOpen: boolean;
  onClose: () => void;
};

const BeatModal = ({ beats, isOpen, onClose }: BeatModalProps) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h1 className="beat-modal-title">Elige un Beat</h1>
      <section className="beat-list">
        {beats.map(beat => {
          return (
            <div key={beat.name} className="beat">
              <ReggaeIcon width={32} height={32} />
              <h2 className="beat-title">{beat.name}</h2>
            </div>
          );
        })}
      </section>
    </BaseModal>
  );
};

export default BeatModal;
