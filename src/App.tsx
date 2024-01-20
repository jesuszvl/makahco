import Modal from 'react-modal';

import StimulusContent from './components/StimulusContent/StimulusContent';

import PageContainer from './components/PageContainer/PageContainer';
import PlayBar from './components/PlayBar/PlayBar';
import { useStopwatch } from 'react-timer-hook';
import { useSoundStore } from './store/soundStore';
import Timer from './components/Timer/Timer';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const App = () => {
  const sound = useSoundStore(state => state.sound);

  const { totalSeconds, start, reset, isRunning } = useStopwatch({
    autoStart: false,
  });

  const resetStopwatch = () => {
    reset(new Date(0), false);
  };

  const remainingSeconds = Math.floor(sound.duration() - totalSeconds);

  return (
    <PageContainer>
      <StimulusContent isRunning={isRunning}/>
      <Timer remainingSeconds={remainingSeconds} isRunning={isRunning} />
      <PlayBar onPlay={start} onStop={resetStopwatch} />
    </PageContainer>
  );
};

export default App;
