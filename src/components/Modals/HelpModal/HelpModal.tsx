import BaseModal from '../BaseModal';

type HelpModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HelpModal = ({ isOpen, onClose }: HelpModalProps) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <h1 className="help-modal-title">Ayuda</h1>
      <section className="help-list">
        <p className="help-text">1. Elige un beat</p>
        <p className="help-text">2. Elige un modo</p>
        <p className="help-text">3. Presiona el botón de play</p>
      </section>
    </BaseModal>
  );
};

export default HelpModal;
