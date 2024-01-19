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
  const { updateModeIndex } = useBeatStore();

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h1 className="mode-modal-title">Elige un Modo</h1>
      <section className="mode-list">
        {modes.map((mode, index) => {
          return (
            <button
              key={mode.name}
              className="mode"
              onClick={() => {
                updateModeIndex(index);
                closeModal();
              }}
            >
              <span className="mode-icon">
                <mode.icon width={64} height={64} />
              </span>
              <span>
                <h2 className="mode-title">{mode.name}</h2>
                <p className="mode-description">{mode.description}</p>
              </span>
            </button>
          );
        })}
      </section>
    </BaseModal>
  );
};

export default ModeModal;
