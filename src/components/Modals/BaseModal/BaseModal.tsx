import Modal from 'react-modal';

import './BaseModal.css';
import PreviousIcon from '../../../icons/PreviousIcon';
import NextIcon from '../../../icons/NextIcon';

type BaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title: string;
  onAccept?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
};

const BaseModal = ({
  isOpen,
  onClose,
  children,
  title,
  onAccept,
  onPrevious,
  onNext,
}: BaseModalProps) => {
  return (
    <Modal
      className="modal-container"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <section className="modal-content">
        <h1 className="modal-title">{title}</h1>
        <div className="modal-selector">
          <button className="modal-selector-button" onClick={onPrevious}>
            <PreviousIcon width={24} height={24} />
          </button>
          {children}
          <button className="modal-selector-button" onClick={onNext}>
            <NextIcon width={24} height={24} />
          </button>
        </div>
        <button className="modal-button" onClick={onAccept}>
          ACEPTAR
        </button>
      </section>
    </Modal>
  );
};

export default BaseModal;
