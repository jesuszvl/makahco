import classNames from "classnames";
import React from "react";

import { MODES } from "../../utils/constants";
import styles from "./FreeModeSelector.module.scss";

const FreeModeSelector = ({ currentMode, onModeClick }) => {
  return (
    <div className={styles["mode-selector"]}>
      {MODES.map((mode) => {
        return (
          <div
            key={mode.id}
            className={classNames(styles["mode-container"], {
              [styles["mode-active"]]: currentMode.id === mode.id,
            })}
            onClick={() => onModeClick(mode)}
          >
            {mode.label}
          </div>
        );
      })}
    </div>
  );
};

export default FreeModeSelector;
