import './MenuOption.css';
import ChevronRightIcon from '../../icons/ChevronRightIcon';

interface MenuOptionProps {
  option: {
    name: string;
    description: string;
  };
  onOptionClick: () => void;
}

const MenuOption = ({ option, onOptionClick }: MenuOptionProps) => {
  return (
    <>
      <div key={option.name} className="menu-option" onClick={onOptionClick}>
        <span className="option-name">{option.name}</span>
        <span className="option-icon">
          <ChevronRightIcon width={20} height={20} />
        </span>
      </div>
    </>
  );
};

export default MenuOption;
