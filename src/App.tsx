import Modal from 'react-modal';

import { useState } from 'react';
import StimulusContent from './components/StimulusContent/StimulusContent';

import PageContainer from './components/PageContainer/PageContainer';
import { STIMULUS_INITIAL } from './utils/stimulus';
import PlayBar from './components/PlayBar/PlayBar';
import { Stimulus } from './types/types';
import PlayBarTimer from './components/PlayBar/PlayBarTimer/PlayBarTimer';
import { useStopwatch } from 'react-timer-hook';
import { useSoundStore } from './store/soundStore';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const App = () => {
  const [stimulus] = useState<Stimulus>(STIMULUS_INITIAL);

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
      <StimulusContent stimulus={stimulus} />
      <PlayBarTimer remainingSeconds={remainingSeconds} isRunning={isRunning} />
      <PlayBar onPlay={start} onStop={resetStopwatch} />
    </PageContainer>
  );
};

export default App;
