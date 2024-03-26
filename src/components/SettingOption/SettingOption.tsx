import './SettingOption.css';

type SettingOptionProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  onClick: () => void;
};

const SettingOption = ({
  icon,
  title,
  description,
  onClick,
}: SettingOptionProps) => {
  return (
    <div className="setting-option" onClick={onClick}>
      {icon}
      <span className="setting-option-info">
        <span className="setting-option-title">{title}</span>
        <p className="setting-option-description">{description}</p>
      </span>
    </div>
  );
};

export default SettingOption;
