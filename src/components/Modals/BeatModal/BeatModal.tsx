import './BeatModal.css';
import { Beat } from '../../../types/types';
import BaseModal from '../BaseModal';
import { useBeatStore } from '../../../store/beatStore';
import { useSoundStore } from '../../../store/soundStore';
import { useModalStore } from '../../../store/modalStore';

type BeatModalProps = {
  beats: Beat[];
  isOpen: boolean;
  onClose: () => void;
};

const BeatModal = ({ beats, isOpen, onClose }: BeatModalProps) => {
  const { updateBeat } = useBeatStore();
  const { sound, updateSound } = useSoundStore();
  const { closeModal } = useModalStore();

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h1 className="beat-modal-title">Elige un Beat</h1>
      <section className="beat-list">
        {beats.map(beat => {
          return (
            <button
              key={beat.name}
              className="beat"
              onClick={() => {
                if (sound) sound.stop();
                updateSound(new Howl({ src: [beat.src] }));
                updateBeat(beat);
                closeModal();
              }}
            >
              <beat.icon width={64} height={64} />
              <span className="beat-info">
                <h2 className="beat-title">{beat.name}</h2>
              </span>
            </button>
          );
        })}
      </section>
    </BaseModal>
  );
};

export default BeatModal;
