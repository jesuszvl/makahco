import Modal from 'react-modal';

import './Modal.css';

type BaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
};

const BaseModal = ({ isOpen, onClose, content }: BaseModalProps) => {
  return (
    <Modal
      className="modal-container"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <div className="modal-content">{content}</div>
    </Modal>
  );
};

export default BaseModal;
