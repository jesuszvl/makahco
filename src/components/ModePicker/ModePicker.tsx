import classNames from "classnames";
import styles from "./ModePicker.module.scss";
import { Mode } from "../../App";

type ModePickerProps = {
  modes: Mode[];
  currentMode: Mode;
  onModeClick: (mode: Mode) => void;
};

const ModePicker = ({ modes, currentMode, onModeClick }: ModePickerProps) => {
  return (
    <div className={styles["mode-picker-container"]}>
      {modes.map((mode) => {
        return (
          <div
            key={mode.id}
            className={classNames(styles["mode-container"], {
              [styles["mode-active"]]: currentMode.id === mode.id,
            })}
            onClick={() => onModeClick(mode)}
            title={mode.label}
          >
            {mode.label}
          </div>
        );
      })}
    </div>
  );
};

export default ModePicker;
