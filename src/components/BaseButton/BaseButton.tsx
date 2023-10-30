import { ReactNode } from "react";
import styles from "./BaseButton.module.scss";
import classNames from "classnames";

type BaseButtonProps = {
  onClick: () => void;
  icon: ReactNode;
  isLarge?: boolean;
};

const BaseButton = ({ onClick, icon, isLarge = false }: BaseButtonProps) => {
  return (
    <button
      className={classNames([
        styles["base-button"],
        {
          [styles.large]: isLarge,
        },
      ])}
      onClick={onClick}
      aria-label="base button"
    >
      {icon}
    </button>
  );
};

export default BaseButton;
