import './ModeModal.css';
import { Mode } from '../../../types/types';
import BaseModal from '../BaseModal';
import { useModalStore } from '../../../store/modalStore';
import { useBeatStore } from '../../../store/beatStore';

type ModeModalProps = {
  modes: Mode[];
  isOpen: boolean;
  onClose: () => void;
};

const ModeModal = ({ modes, isOpen, onClose }: ModeModalProps) => {
  const { closeModal } = useModalStore();
  const { updateMode } = useBeatStore();

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h1 className="mode-modal-title">Elige un Modo</h1>
      <section className="mode-list">
        {modes.map(mode => {
          return (
            <button
              key={mode}
              className="mode"
              onClick={() => {
                updateMode(mode);
                closeModal();
              }}
            >
              <h2 className="mode-title">{mode}</h2>
            </button>
          );
        })}
      </section>
    </BaseModal>
  );
};

export default ModeModal;
