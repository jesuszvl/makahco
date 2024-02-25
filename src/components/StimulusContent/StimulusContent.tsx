import './StimulusContent.css';
import { Stimulus, Step, Word } from '../../types/types';
import classNames from 'classnames';
import { ThreeDots } from 'react-loader-spinner';

interface StimulusContentProps {
  stimulus: Stimulus;
  isRunning: boolean;
  step: Step;
}

const StimulusContent = ({
  isRunning,
  stimulus,
  step,
}: StimulusContentProps) => {
  const renderInitial = () => {
    return (
      <span>
        <h1 className="word">MAKAHCO</h1>
        <p className={classNames('subword', { animated: !isRunning })}>
          PRESIONA PLAY PARA INICIAR
        </p>
      </span>
    );
  };

  const renderWord = (word: Word) => {
    return (
      <span key={word.value}>
        <h1 className="word">{word.value}</h1>
        <p className="subword">{word.subword}</p>
      </span>
    );
  };

  const renderWords = (words: Word[]) => {
    return (
      <span>
        {words.map((word, index) => (
          <span key={index}>
            <h1 className="word">{word.value}</h1>
            <p className="subword">{word.subword}</p>
          </span>
        ))}
      </span>
    );
  };

  const renderImage = (image: Word) => {
    return (
      <div className="stimulus-image">
        <img className="stimulus-image" src={image.value} alt="" />
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <ThreeDots
        color="#8436b3"
        width={100}
        height={100}
        ariaLabel="three-dots-loading"
      />
    );
  };

  const renderStep = () => {
    if (step === Step.INITIAL) return renderInitial();
    if (step === Step.LOADING) return renderLoading();
    if (step === Step.COUNTDOWN) return renderWord(stimulus.values[0]);
    if (step === Step.STIMULUS) {
      if (stimulus.type === 'WORD') return renderWords(stimulus.values);
      if (stimulus.type === 'IMAGE') return renderImage(stimulus.values[0]);
    }
  };

  return (
    <section className="stimulus-content">
      <div className="stimulus-word">
        <span className="stimulus-words">{renderStep()}</span>
      </div>
    </section>
  );
};

export default StimulusContent;
