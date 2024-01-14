import { useBeatStore } from '../../../store/beatStore';
import { useModalStore } from '../../../store/modalStore';
import { Mode, Option, Modals } from '../../../types/types';
import { BEATS } from '../../../utils/beats';
import BeatModal from '../BeatModal/BeatModal';
import HelpModal from '../HelpModal/HelpModal';
import SettingModal from '../SettingModal/SettingModal';

const ModalManager = () => {
  const { isOpen, type, closeModal } = useModalStore();
  const { updateMode } = useBeatStore();

  const modes: Mode[] = Object.values(Mode);

  if (type === Modals.BEAT) {
    return <BeatModal isOpen={isOpen} onClose={closeModal} beats={BEATS} />;
  }

  if (type === Modals.MODO) {
    return (
      <SettingModal
        isOpen={isOpen}
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

  if (type === Modals.HELP) {
    return <HelpModal isOpen={isOpen} onClose={closeModal} />;
  }

  return null;
};

export default ModalManager;
