import './Timer.css';

interface TimerProps {
  remainingSeconds: number;
  isRunning: boolean;
}

const Timer = ({ remainingSeconds, isRunning }: TimerProps) => {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <span className="playbar-time">
      {!isRunning
        ? '--:--'
        : `${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`}
    </span>
  );
};

export default Timer;
