import Modal from 'react-modal';
import './PlaylistModal.css';
import { Beat, Mode, Option } from '../../../types/types';

type PlaylistModalProps = {
  options: Mode[] | Beat[];
  isOpen: boolean;
  onClose: () => void;
  onOptionClick: (option: Option) => void;
};

const PlaylistModal = ({
  options,
  isOpen,
  onClose,
  onOptionClick,
}: PlaylistModalProps) => {
  return (
    <Modal
      className="modal"
      overlayClassName={'modal-overlay'}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <div className={'modal-content'}>
        {options.map(option => {
          const optionName = typeof option === 'string' ? option : option.name;
          return (
            <div
              key={optionName}
              className={'modal-card'}
              onClick={() => {
                onOptionClick(option);
                onClose();
              }}
            >
              {optionName}
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default PlaylistModal;
