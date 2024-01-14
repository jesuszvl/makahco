import { Stimulus, Word } from '../../types/types';
import './StimulusContent.css';

interface StimulusContentProps {
  stimulus: Stimulus;
}

const StimulusContent = ({ stimulus }: StimulusContentProps) => {
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

  return (
    <section className="stimulus-content">
      <div className="stimulus-word">
        <span className="stimulus-words">
          {stimulus.type === 'IMAGE'
            ? renderImage(stimulus.values[0])
            : stimulus.values.map(word => {
                return renderWord(word);
              })}
        </span>
      </div>
    </section>
  );
};

export default StimulusContent;
