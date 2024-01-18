import './PlayBarTimer.css';

interface PlayBarTimerProps {
  remainingSeconds: number;
  isRunning: boolean;
}

const PlayBarTimer = ({ remainingSeconds, isRunning }: PlayBarTimerProps) => {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <>
      <span className="playbar-time">
        {!isRunning
          ? '--:--'
          : `${minutes.toString().padStart(2, '0')}:${seconds
              .toString()
              .padStart(2, '0')}`}
      </span>
    </>
  );
};

export default PlayBarTimer;
