import './PlayBarButton.css';
import PlayIcon from '../../../icons/PlayIcon';
import StopIcon from '../../../icons/StopIcon';
import { useSoundStore } from '../../../store/soundStore';
import { useCallback, useState } from 'react';

interface PlayBarButtonProps {
  handlePlay: () => void;
  handleStop: () => void;
}

const PlayBarButton = ({ handlePlay, handleStop }: PlayBarButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { sound } = useSoundStore();

  sound.on('play', () => {
    setIsPlaying(true);
    handlePlay();
  });

  const onStop = useCallback(() => {
    if (sound) sound.stop();
    setIsPlaying(false);
    handleStop();
  }, [sound, handleStop]);

  const onPlay = useCallback(() => {
    if (sound) sound.play();
  }, [sound]);

  return (
    <button className="playbar-button" onClick={isPlaying ? onStop : onPlay}>
      {isPlaying ? (
        <StopIcon height={54} width={54} />
      ) : (
        <PlayIcon height={54} width={54} />
      )}
    </button>
  );
};

export default PlayBarButton;
