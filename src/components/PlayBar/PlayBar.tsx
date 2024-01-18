import './PlayBar.css';
import PlayBarMenu from './PlayBarMenu/PlayBarMenu';
import PlayBarButton from './PlayBarButton/PlayBarButton';
import PlayBarTimer from './PlayBarTimer/PlayBarTimer';
import { useStopwatch } from 'react-timer-hook';
import { useSoundStore } from '../../store/soundStore';

const PlayBar = () => {
  const { sound } = useSoundStore();
  const { totalSeconds, start, reset, isRunning } = useStopwatch({
    autoStart: false,
  });

  const resetStopwatch = () => {
    reset(new Date(0), false);
  };

  const remainingSeconds = Math.floor(sound.duration() - totalSeconds);

  return (
    <section className="playbar-container">
      <div className="playbar">
        <PlayBarTimer
          remainingSeconds={remainingSeconds}
          isRunning={isRunning}
        />
        <PlayBarButton handlePlay={start} handleStop={resetStopwatch} />
        <PlayBarMenu />
      </div>
    </section>
  );
};

export default PlayBar;
