import { useBeatStore } from '../../../store/beatStore';
import { Mode, Option, Modals } from '../../../types/types';
import { BEATS } from '../../../utils/beats';
import HelpModal from '../HelpModal/HelpModal';
import SettingModal from '../SettingModal/SettingModal';

const ModalManager = () => {
  const { isModalOpen, modalType, closeModal, updateBeat, updateMode } =
    useBeatStore();

  const modes: Mode[] = Object.values(Mode);

  if (modalType === Modals.BEAT) {
    return (
      <SettingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        options={BEATS}
        onOptionClick={(option: Option) => {
          if (typeof option !== 'string') {
            updateBeat(option);
          }
        }}
      />
    );
  }

  if (modalType === Modals.MODO) {
    return (
      <SettingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        options={modes}
        onOptionClick={(option: Option) => {
          if (typeof option === 'string') {
            updateMode(option);
          }
        }}
      />
    );
  }

  if (modalType === Modals.HELP) {
    return <HelpModal isOpen={isModalOpen} onClose={closeModal} />;
  }

  return null;
};

export default ModalManager;
