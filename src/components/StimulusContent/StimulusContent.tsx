import { useState } from 'react';
import { Stimulus, Word } from '../../types/types';
import { STIMULUS_INITIAL } from '../../utils/stimulus';
import './StimulusContent.css';
import classNames from 'classnames';
import { ThreeDots } from 'react-loader-spinner';

interface StimulusContentProps {
  isRunning: boolean;
}

const StimulusContent = ({ isRunning }: StimulusContentProps) => {
  const [stimulus] = useState<Stimulus>(STIMULUS_INITIAL);

  const renderInitial = () => {
    return (
      <span>
        <h1 className="word">MAKAHCO</h1>
        <p className={classNames('subword', {'animated': !isRunning})}>PRESIONA PLAY PARA INICIAR</p>
      </span>
    );
  }

  const renderWord = (word: Word) => {
    return (
      <span key={word.value}>
        <h1 className="word">{word.value}</h1>
        <p className="subword">{word.subword}</p>
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

  const renderStimulus = () => {
    return <ThreeDots color="#8436b3" width={100}/>;
    return stimulus.type === 'IMAGE'
    ? renderImage(stimulus.values[0])
    : stimulus.values.map(word => {
        return renderWord(word);
      })
  }


  return (
    <section className="stimulus-content">
      <div className="stimulus-word">
        <span className="stimulus-words">
          {isRunning ? renderStimulus() : renderInitial()}
        </span>
      </div>
    </section>
  );
};

export default StimulusContent;
