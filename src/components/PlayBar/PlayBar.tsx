import './PlayBar.css';
import PlayBarButton from './PlayBarButton/PlayBarButton';
import Timer from '../Timer/Timer';
import MenuButton from '../MenuButton/MenuButton';

type PlayBarProps = {
  onPlay: () => void;
  onStop: () => void;
  remainingSeconds: number;
  isRunning: boolean;
};

const PlayBar = ({
  onPlay,
  onStop,
  remainingSeconds,
  isRunning,
}: PlayBarProps) => {
  return (
    <section className="playbar-container">
      <div className="playbar">
        <Timer remainingSeconds={remainingSeconds} isRunning={isRunning} />
        <PlayBarButton handlePlay={onPlay} handleStop={onStop} />
        <MenuButton />
      </div>
    </section>
  );
};

export default PlayBar;
