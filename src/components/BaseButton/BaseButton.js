import classNames from "classnames";
import React from "react";

import styles from "./BaseButton.module.scss";

const BaseButton = ({
  content,
  onClick,
  type,
  isSmall = false,
  isPurple = false,
}) => {
  return (
    <button
      className={classNames(styles["base-button"], {
        [styles["purple-button"]]: isPurple,
        [styles["small-button"]]: isSmall,
      })}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
};

export default BaseButton;
