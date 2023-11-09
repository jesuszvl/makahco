import styles from "./SettingSelector.module.scss";

type SettingSelectorProps = {
  setting: string;
  onBack: () => void;
  onNext: () => void;
  onSettingClick: () => void;
};

const SettingSelector = ({
  setting,
  onBack,
  onNext,
  onSettingClick,
}: SettingSelectorProps) => {
  return (
    <div className={styles["setting-selector-container"]}>
      <button className={styles["selector-button"]} onClick={onBack}>
        {"<<"}
      </button>
      <button className={styles["selector-button"]} onClick={onSettingClick}>
        {setting}
      </button>
      <button className={styles["selector-button"]} onClick={onNext}>
        {">>"}
      </button>
    </div>
  );
};

export default SettingSelector;
