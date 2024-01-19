import './PlayBar.css';
import PlayBarButton from './PlayBarButton/PlayBarButton';
import { useModalStore } from '../../store/modalStore';
import { useBeatStore } from '../../store/beatStore';
import { Modals } from '../../types/types';

type PlayBarProps = {
  onPlay: () => void;
  onStop: () => void;
};

const PlayBar = ({ onPlay, onStop }: PlayBarProps) => {
  const { openModalType } = useModalStore();
  const { getCurrentBeat, getCurrentMode } = useBeatStore();

  const beat = getCurrentBeat();
  const mode = getCurrentMode();

  return (
    <section className="playbar-container">
      <div className="playbar">
        <button
          className="playbar-button"
          onClick={() => openModalType(Modals.BEAT)}
        >
          <beat.icon width={32} height={32} />
        </button>
        <PlayBarButton handlePlay={onPlay} handleStop={onStop} />
        <button
          className="playbar-button"
          onClick={() => openModalType(Modals.MODO)}
        >
          <mode.icon width={32} height={32} />
        </button>
      </div>
    </section>
  );
};

export default PlayBar;
