import BeatIcon from "../../icons/BeatIcon";
import PlayIcon from "../../icons/PlayIcon";
import SettingsIcon from "../../icons/SettingsIcon";
import StopIcon from "../../icons/StopIcon";
import BaseButton from "../BaseButton/BaseButton";
import styles from "./BeatPlayer.module.scss";

type BeatPlayerProps = {
  onPlay: () => void;
  onStop: () => void;
  onMusic: () => void;
  onSettings: () => void;
  sound: unknown;
};

const BeatPlayer = ({
  onPlay,
  onStop,
  onMusic,
  onSettings,
  sound,
}: BeatPlayerProps) => {
  return (
    <div className={styles["beat-player-container"]}>
      <BaseButton onClick={onSettings} icon={<SettingsIcon />} />
      <div className={styles["sound-player"]}>
        {sound ? (
          <BaseButton onClick={onStop} icon={<StopIcon />} isLarge />
        ) : (
          <BaseButton onClick={onPlay} icon={<PlayIcon />} isLarge />
        )}
      </div>
      <BaseButton onClick={onMusic} icon={<BeatIcon />} />
    </div>
  );
};

export default BeatPlayer;
