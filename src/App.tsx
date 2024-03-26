import './styles/index.css';
import Modal from 'react-modal';
import StimulusContent from './components/StimulusContent/StimulusContent';

import PageContainer from './components/PageContainer/PageContainer';
import PlayBar from './components/PlayBar/PlayBar';
import { useStopwatch } from 'react-timer-hook';
import { useSoundStore } from './store/soundStore';
import { useBeatStore } from './store/beatStore';
import { useEffect, useState } from 'react';
import { Step, Stimulus, StimulusType } from './types/types';
import {
  STIMULUS_INITIAL,
  getRandomImage,
  getRandomWords,
} from './utils/stimulus';
import { useSettingsStore } from './store/settingsStore';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const App = () => {
  const [stimulus, setStimulus] = useState<Stimulus>(STIMULUS_INITIAL);
  const [step, setStep] = useState<Step>(Step.INITIAL);
  const { stimulusType, theme } = useSettingsStore();

  const sound = useSoundStore(state => state.sound);

  const { getCurrentBeat, getCurrentMode } = useBeatStore();
  const currentBeat = getCurrentBeat();
  const currentMode = getCurrentMode();

  const { totalSeconds, start, reset, isRunning } = useStopwatch({
    autoStart: false,
  });

  const onPlay = () => {
    start();
    setStep(Step.LOADING);
  };

  const onStop = () => {
    reset(new Date(0), false);
    setStep(Step.INITIAL);
    setStimulus(STIMULUS_INITIAL);
  };

  const setStimulusWord = (value: string) => {
    setStimulus({
      type: StimulusType.WORD,
      values: [
        {
          value: value,
        },
      ],
    });
  };

  useEffect(() => {
    const fetchStimulus = async () => {
      switch (currentMode.name) {
        case 'TERMINACIONES':
          setStimulus(await getRandomWords(4));
          break;
        case 'IMÁGENES':
          setStimulus(await getRandomImage());
          break;
        default:
          setStimulus(await getRandomWords(1));
          break;
      }
    };

    const countdownSeconds = currentBeat.beat_drop - totalSeconds;

    if (countdownSeconds === 3) {
      setStep(Step.COUNTDOWN);
    }

    if (countdownSeconds === 1) {
      setStep(Step.STIMULUS);
    }

    if (step === Step.COUNTDOWN) {
      setStimulusWord(countdownSeconds.toString());
    }

    if (step === Step.STIMULUS) {
      if (
        (countdownSeconds < 0 && totalSeconds === currentBeat.beat_drop + 1) ||
        (totalSeconds > currentBeat.beat_drop &&
          countdownSeconds % currentBeat.spb === 0)
      ) {
        fetchStimulus();
      }
    }
  }, [currentBeat, currentMode, totalSeconds, step]);

  const remainingSeconds = Math.floor(sound.duration() - totalSeconds);

  return (
    <PageContainer>
      <StimulusContent stimulus={stimulus} isRunning={isRunning} step={step} />
      <PlayBar
        onPlay={onPlay}
        onStop={onStop}
        remainingSeconds={remainingSeconds}
        isRunning={isRunning}
      />
    </PageContainer>
  );
};

export default App;
