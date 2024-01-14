import './PlayBarTimer.css';

interface PlayBarTimerProps {
  minutes: number;
  seconds: number;
}

const PlayBarTimer = ({ minutes, seconds }: PlayBarTimerProps) => {
  const showLines = seconds === 0 && minutes === 0;
  return (
    <span className="playbar-time">
      {showLines
        ? '-- : -- '
        : `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`}
    </span>
  );
};

export default PlayBarTimer;
