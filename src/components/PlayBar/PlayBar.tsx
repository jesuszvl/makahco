import BeatIcon from '../../icons/BeatIcon';
import PlayIcon from '../../icons/PlayIcon';
import SettingsIcon from '../../icons/SettingsIcon';
import { useBeatStore } from '../../store/beatStore';
import { Modals } from '../../types/types';
import StopIcon from '../../icons/StopIcon';

import './PlayBar.css';
import HelpIcon from '../../icons/HelpIcon';

interface PlayBarProps {
  onPlay: () => void;
  onStop: () => void;
  sound: unknown;
  minutes: number;
  seconds: number;
}

const PlayBar = ({ minutes, seconds, onPlay, onStop, sound }: PlayBarProps) => {
  const { openModal, beat, mode, updateModalType } = useBeatStore();

  const openBeatModal = () => {
    updateModalType(Modals.BEAT);
    openModal();
  };

  const openModeModal = () => {
    updateModalType(Modals.MODO);
    openModal();
  };

  const openHelpModal = () => {
    updateModalType(Modals.HELP);
    openModal();
  };

  return (
    <div className="playbar-container">
      <div className="playbar">
        <span className="playbar-info">
          <span className="playbar-title">
            {beat.name} - {mode}
          </span>
          <div>
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')}
          </div>
        </span>
        <button className="playbar-button" onClick={sound ? onStop : onPlay}>
          {sound ? (
            <StopIcon height={48} width={48} />
          ) : (
            <PlayIcon height={48} width={48} />
          )}
        </button>
        <div className="playbar-settings">
          <button className="playbar-button" onClick={openBeatModal}>
            <BeatIcon width={24} height={24} />
          </button>
          <button className="playbar-button" onClick={openModeModal}>
            <SettingsIcon width={24} height={24} />
          </button>
          <button className="playbar-button" onClick={openHelpModal}>
            <HelpIcon width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
