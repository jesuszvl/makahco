import classNames from "classnames";
import styles from "./ModePicker.module.scss";

export interface Mode {
  id: string;
  label: string;
}

type ModePickerProps = {
  currentMode: Mode;
  onModeClick: (mode: Mode) => void;
};

export const MODES: Mode[] = [
  { id: "IZI", label: "Clásico" },
  { id: "4FB", label: "4 x Barra" },
  { id: "IMG", label: "Imágenes" },
];

const ModePicker = ({ currentMode, onModeClick }: ModePickerProps) => {
  return (
    <div className={styles["mode-picker-container"]}>
      {MODES.map((mode) => {
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
