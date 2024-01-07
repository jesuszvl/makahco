import { Stimulus } from '../../types/types';
import styles from './StimulusContent.module.scss';

interface StimulusContentProps {
  stimulus: Stimulus;
}

const StimulusContent = ({ stimulus }: StimulusContentProps) => {
  return (
    <div className={styles['stimulus-content']}>
      <div className={styles['stimulus-word']}>
        <span className={styles['stimulus-words']}>
          {stimulus.type === 'image' ? (
            <div className={styles['stimulus-image']}>
              <img
                className={styles['stimulus-image']}
                src={stimulus.values[0]}
                alt=""
              />
            </div>
          ) : (
            stimulus.values.map(word => {
              return <span key={word}>{word}</span>;
            })
          )}
        </span>
      </div>
    </div>
  );
};

export default StimulusContent;
