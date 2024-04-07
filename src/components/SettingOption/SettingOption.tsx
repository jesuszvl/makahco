import CheckmarkIcon from '../../icons/CheckmarkIcon';
import { useSettingsStore } from '../../store/settingsStore';
import './SettingOption.css';

type SettingOptionProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  onClick: () => void;
  isActive?: boolean;
};

const SettingOption = ({
  icon,
  title,
  description,
  onClick,
  isActive = false,
}: SettingOptionProps) => {
  const { theme } = useSettingsStore();
  return (
    <div className="setting-option-container" onClick={onClick}>
      <span className="setting-option">
        {icon}
        <span className="setting-option-info">
          <span className="setting-option-title">{title}</span>
          <p className="setting-option-description">{description}</p>
        </span>
      </span>
      {isActive && (
        <span className="check-icon">
          <CheckmarkIcon width={32} height={32} color={theme.secondaryColor} />
        </span>
      )}
    </div>
  );
};

export default SettingOption;
