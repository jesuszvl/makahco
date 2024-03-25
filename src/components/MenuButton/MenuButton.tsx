import './MenuButton.css';

import { useModalStore } from '../../store/modalStore';
import MenuIcon from '../../icons/MenuIcon';

const MenuButton = () => {
  const { openModal } = useModalStore();

  return (
    <button className="menu-button" onClick={openModal}>
      <MenuIcon width={36} height={36} />
    </button>
  );
};

export default MenuButton;
