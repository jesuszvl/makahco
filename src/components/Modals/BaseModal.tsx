import Modal from 'react-modal';

import './BaseModal.css';

type BaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const BaseModal = ({ isOpen, onClose, children }: BaseModalProps) => {
  return (
    <Modal
      className="modal-container"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <section className="modal-content">{children}</section>
    </Modal>
  );
};

export default BaseModal;
