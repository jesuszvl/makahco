import { Howl } from 'howler';
import Modal from 'react-modal';

import { useCallback, useEffect, useState } from 'react';
import StimulusContent from './components/StimulusContent/StimulusContent';
import { useStopwatch } from 'react-timer-hook';
import PageContainer from './components/PageContainer/PageContainer';
import {
  STIMULUS_INITIAL,
  getRandomImage,
  getRandomWords,
} from './utils/stimulus';
import { useBeatStore } from './store/beatStore';
import PlayBar from './components/PlayBar/PlayBar';
import { Mode, Stimulus } from './types/types';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const App = () => {
  const { beat, mode } = useBeatStore();
  const [sound, setSound] = useState<Howl | null>(null);
  const [stimulus, setStimulus] = useState<Stimulus>(STIMULUS_INITIAL);

  const { seconds, minutes, totalSeconds, start, reset } = useStopwatch({
    autoStart: false,
  });

  // Countdown effect
  useEffect(() => {
    const fetchNewStimulus = async () => {
      if (mode === Mode.VISUALES) {
        const randomImage = await getRandomImage();
        setStimulus({ type: 'image', values: [randomImage] });
      } else {
        const wordsPerBar = mode === Mode.TERMINACIONES ? 4 : 1;
        const randomWords = await getRandomWords(wordsPerBar);
        setStimulus({ type: 'word', values: randomWords });
      }
    };

    const countdownSeconds = beat.beat_drop - totalSeconds;

    // Are you ready?
    if (totalSeconds > 1 && countdownSeconds === 10) {
      setStimulus({ type: 'word', values: ['¿ESTAS LISTO?'] });
    }

    // Se lo damos en...3, 2, 1
    if (countdownSeconds >= 2 && countdownSeconds <= 4) {
      setStimulus({
        type: 'word',
        values: [(countdownSeconds - 1).toString()],
      });
    }

    // Fetching palabras
    if (
      (countdownSeconds < 0 && totalSeconds === beat.beat_drop + 1) ||
      (totalSeconds > beat.beat_drop && countdownSeconds % beat.spb === 0)
    ) {
      fetchNewStimulus();
    }
  }, [totalSeconds, beat, mode]);

  const onStop = useCallback(() => {
    if (sound) sound.stop();
    setSound(null);
    setStimulus(STIMULUS_INITIAL);
    reset(new Date(0), false);
  }, [sound, reset]);

  const onPlay = () => {
    const howlerSound = new Howl({
      src: [beat.src],
      html5: true,
      volume: 0.5,
    });

    howlerSound.play();
    start();

    setSound(howlerSound);

    // Fires when the sound finishes playing.
    howlerSound.on('end', function () {
      onStop();
    });
  };

  return (
    <PageContainer>
      <div className="free">
        <StimulusContent stimulus={stimulus} />
        <PlayBar
          minutes={minutes}
          seconds={seconds}
          onPlay={onPlay}
          onStop={onStop}
          sound={sound}
        />
      </div>
    </PageContainer>
  );
};

export default App;
