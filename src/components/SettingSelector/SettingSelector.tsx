import styles from "./SettingSelector.module.scss";

type SettingSelectorProps = {
  setting: string;
  type: string;
  onBack: () => void;
  onNext: () => void;
  onSettingClick: () => void;
};

const SettingSelector = ({
  type,
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
        <span className={styles["selector-button-setting"]}>{setting}</span>
        <span className={styles["selector-button-type"]}>{type}</span>
      </button>
      <button className={styles["selector-button"]} onClick={onNext}>
        {">>"}
      </button>
    </div>
  );
};

export default SettingSelector;
