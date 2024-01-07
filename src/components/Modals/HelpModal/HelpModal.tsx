import BaseModal from '../BaseModal';

type HelpModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HelpModal = ({ isOpen, onClose }: HelpModalProps) => {
  return <BaseModal isOpen={isOpen} onClose={onClose} content={'Help'} />;
};

export default HelpModal;
