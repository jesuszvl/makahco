import './PlayBar.css';
import PlayBarMenu from './PlayBarMenu/PlayBarMenu';
import PlayBarButton from './PlayBarButton/PlayBarButton';
import PlayBarTimer from './PlayBarTimer/PlayBarTimer';
import { useStopwatch } from 'react-timer-hook';
import { useSoundStore } from '../../store/soundStore';

const PlayBar = () => {
  const { sound } = useSoundStore();
  const { totalSeconds, start, reset, pause } = useStopwatch({
    autoStart: false,
  });

  const remainingSeconds = Math.floor(sound.duration() - totalSeconds);

  console.log(remainingSeconds);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <section className="playbar-container">
      <div className="playbar">
        <PlayBarTimer minutes={minutes} seconds={seconds} />
        <PlayBarButton
          handlePlay={start}
          handleStop={() => {
            pause();
            reset();
          }}
        />
        <PlayBarMenu />
      </div>
    </section>
  );
};

export default PlayBar;
