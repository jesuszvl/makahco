import { useBeatStore } from "../../store/beatStore";
import { Setting } from "../../types/types";
import styles from "./SettingSelector.module.scss";

const SettingSelector = () => {
  const { setting, updateSetting, getCurrentSettingValue, openModal } =
    useBeatStore();
  const settings: Setting[] = Object.values(Setting);

  const nextSetting = () => {
    const index = settings.indexOf(setting);
    const nextIndex = (index + 1) % settings.length;
    return settings[nextIndex];
  };

  const previousSetting = () => {
    const index = settings.indexOf(setting);
    const previousIndex = (index - 1 + settings.length) % settings.length;
    return settings[previousIndex];
  };

  return (
    <div className={styles["setting-selector-container"]}>
      <button
        className={styles["selector-button"]}
        onClick={() => {
          updateSetting(previousSetting());
        }}
      >
        {"<<"}
      </button>
      <button className={styles["selector-button"]} onClick={openModal}>
        <span className={styles["selector-button-type"]}>{setting}</span>
        <span className={styles["selector-button-setting"]}>
          {getCurrentSettingValue()}
        </span>
      </button>
      <button
        className={styles["selector-button"]}
        onClick={() => {
          updateSetting(nextSetting());
        }}
      >
        {">>"}
      </button>
    </div>
  );
};

export default SettingSelector;
