import Modal from 'react-modal';

import './BaseModal.css';
import CloseIcon from '../../../icons/CloseIcon';
import ChevronLeftIcon from '../../../icons/ChevronLeftIcon';

type BaseModalProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  onBack?: () => void;
  isOnStep?: boolean;
};

const BaseModal = ({
  title,
  isOpen,
  onClose,
  children,
  onBack,
  isOnStep,
}: BaseModalProps) => {
  return (
    <Modal
      className="modal-container"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <section className="modal-content">
        <div className="modal-header">
          {isOnStep && (
            <button className="modal-back" onClick={onBack}>
              <ChevronLeftIcon width={24} height={24} color="#fcd926" />
            </button>
          )}
          <h1 className="modal-title">{title}</h1>
          <button className="modal-close" onClick={onClose}>
            <CloseIcon width={16} height={16} color="#fcd926" />
          </button>
        </div>
        {children}
      </section>
    </Modal>
  );
};

export default BaseModal;
