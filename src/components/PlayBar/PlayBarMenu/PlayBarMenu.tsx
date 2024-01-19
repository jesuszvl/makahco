import { useModalStore } from '../../../store/modalStore';
import { useBeatStore } from '../../../store/beatStore';
import { Modals } from '../../../types/types';

import './PlayBarMenu.css';

const PlayBarMenu = () => {
  const { openModalType } = useModalStore();
  const { getCurrentBeat, getCurrentMode } = useBeatStore();

  const beat = getCurrentBeat();
  const mode = getCurrentMode();

  return (
    <div className="playbar-menu">
      <button
        className="playbar-button"
        onClick={() => openModalType(Modals.BEAT)}
      >
        <beat.icon width={32} height={32} />
      </button>
      <button
        className="playbar-button"
        onClick={() => openModalType(Modals.MODO)}
      >
        <mode.icon width={32} height={32} />
      </button>
    </div>
  );
};

export default PlayBarMenu;
