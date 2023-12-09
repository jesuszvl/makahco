import { useBeatStore } from '../../../store/beatStore';
import { Mode, Option, Setting } from '../../../types/types';
import { BEATS } from '../../../utils/beats';
import SettingModal from '../SettingModal/SettingModal';

const ModalManager = () => {
  const { isModalOpen, setting, closeModal, updateBeat, updateMode } =
    useBeatStore();

  const modes: Mode[] = Object.values(Mode);

  if (setting === Setting.BEAT) {
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

  if (setting === Setting.MODO) {
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

  return null;
};

export default ModalManager;
