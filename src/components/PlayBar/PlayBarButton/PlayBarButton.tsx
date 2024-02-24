import './PlayBarButton.css';
import PlayIcon from '../../../icons/PlayIcon';
import StopIcon from '../../../icons/StopIcon';
import { useCallback, useState } from 'react';
import { useBeatStore } from '../../../store/beatStore';

interface PlayBarButtonProps {
  handlePlay: () => void;
  handleStop: () => void;
}

const PlayBarButton = ({ handlePlay, handleStop }: PlayBarButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [sound, setSound] = useState<Howl | null>(null);

  const currentBeat = useBeatStore(state => state.getCurrentBeat());

  sound?.on('end', () => {
    setIsPlaying(false);
    handleStop();
  });

  sound?.on('stop', () => {
    setIsPlaying(false);
    handleStop();
  });

  const onStop = useCallback(() => {
    if (sound) sound.stop();
  }, [sound]);

  const onPlay = useCallback(() => {
    setIsPlaying(true);
    handlePlay();
    const sound = new Howl({
      src: [currentBeat.src],
      autoplay: true,
      loop: true,
      volume: 0.1,
    });
    setSound(sound);
    if (sound) sound.play();
  }, [currentBeat, handlePlay]);

  return (
    <button className="playbar-button" onClick={isPlaying ? onStop : onPlay}>
      {isPlaying ? (
        <StopIcon height={64} width={64} />
      ) : (
        <PlayIcon height={64} width={64} />
      )}
    </button>
  );
};

export default PlayBarButton;
