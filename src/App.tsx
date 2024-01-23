import Modal from 'react-modal';

import StimulusContent from './components/StimulusContent/StimulusContent';

import PageContainer from './components/PageContainer/PageContainer';
import PlayBar from './components/PlayBar/PlayBar';
import { useStopwatch } from 'react-timer-hook';
import { useSoundStore } from './store/soundStore';
import Timer from './components/Timer/Timer';
import { useBeatStore } from './store/beatStore';
import { useEffect, useState } from 'react';
import { Step, Stimulus, StimulusType } from './types/types';
import { STIMULUS_INITIAL } from './utils/stimulus';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const App = () => {
  const [stimulus, setStimulus] = useState<Stimulus>(STIMULUS_INITIAL);
  const [step, setStep] = useState<Step>(Step.INITIAL);
  const sound = useSoundStore(state => state.sound);
  const { getCurrentBeat } = useBeatStore();
  const currentBeat = getCurrentBeat();

  const { totalSeconds, start, reset, isRunning } = useStopwatch({
    autoStart: false,
  });

  const onStop = () => {
    reset(new Date(0), false);
    setStep(Step.INITIAL);
    setStimulus(STIMULUS_INITIAL);
  }

  const onPlay = () => {
    start();
    setStep(Step.LOADING);
  }

  useEffect(() => {
    const countdownSeconds = currentBeat.beat_drop - totalSeconds;
    // Se lo damos en...3, 2, 1
    if (countdownSeconds >= 2 && countdownSeconds <= 4) {
      setStep(Step.COUNTDOWN);
      setStimulus({
        type: StimulusType.WORD,
        values: [
          {
            value: (countdownSeconds - 1).toString(),
          }
        ]
      })
    }

    if (
      (countdownSeconds < 0 && totalSeconds === currentBeat.beat_drop + 1) ||
    (totalSeconds > currentBeat.beat_drop && countdownSeconds % currentBeat.spb === 0)
    ) {
      setStep(Step.STIMULUS);
      setStimulus({
        type: StimulusType.WORD,
        values: [
          {
            value: 'WORD' + countdownSeconds.toString(),
          }
        ]
      })
    }
  }, [currentBeat, totalSeconds]);

  const remainingSeconds = Math.floor(sound.duration() - totalSeconds);
  
  return (
    <PageContainer>
      <Timer remainingSeconds={remainingSeconds} isRunning={isRunning} />
      <StimulusContent stimulus={stimulus} isRunning={isRunning} step={step}/>
      <PlayBar onPlay={onPlay} onStop={onStop} />
    </PageContainer>
  );
};

export default App;
