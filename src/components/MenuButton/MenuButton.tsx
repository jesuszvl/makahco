import './MenuButton.css';

import { useModalStore } from '../../store/modalStore';
import MenuIcon from '../../icons/MenuIcon';
import { useSettingsStore } from '../../store/settingsStore';

const MenuButton = () => {
  const { openModal } = useModalStore();
  const { theme } = useSettingsStore();

  return (
    <button className="menu-button" onClick={openModal}>
      <MenuIcon width={36} height={36} color={theme.secondaryColor} />
    </button>
  );
};

export default MenuButton;
