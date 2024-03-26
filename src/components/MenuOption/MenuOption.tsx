import './MenuOption.css';
import ChevronRightIcon from '../../icons/ChevronRightIcon';
import { useSettingsStore } from '../../store/settingsStore';

interface MenuOptionProps {
  option: {
    name: string;
    description: string;
  };
  onOptionClick: () => void;
}

const MenuOption = ({ option, onOptionClick }: MenuOptionProps) => {
  const { theme } = useSettingsStore();
  return (
    <>
      <div key={option.name} className="menu-option" onClick={onOptionClick}>
        <span className="option-name">{option.name}</span>
        <span className="option-icon">
          <ChevronRightIcon
            width={20}
            height={20}
            color={theme.secondaryColor}
          />
        </span>
      </div>
    </>
  );
};

export default MenuOption;
