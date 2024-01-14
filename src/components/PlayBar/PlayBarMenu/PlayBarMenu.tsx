import BeatIcon from '../../../icons/BeatIcon';
import SettingsIcon from '../../../icons/SettingsIcon';
import { useModalStore } from '../../../store/modalStore';
import { Modals } from '../../../types/types';
import HelpIcon from '../../../icons/HelpIcon';

import './PlayBarMenu.css';

const PlayBarMenu = () => {
  const { openModalType } = useModalStore();

  return (
    <div className="playbar-menu">
      <button
        className="playbar-button"
        onClick={() => openModalType(Modals.BEAT)}
      >
        <BeatIcon width={28} height={28} />
      </button>
      <button
        className="playbar-button"
        onClick={() => openModalType(Modals.MODO)}
      >
        <SettingsIcon width={28} height={28} />
      </button>
      <button
        className="playbar-button"
        onClick={() => openModalType(Modals.HELP)}
      >
        <HelpIcon width={28} height={28} />
      </button>
    </div>
  );
};

export default PlayBarMenu;
