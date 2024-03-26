import './MenuModal.css';
import BaseModal from '../BaseModal/BaseModal';
import { useModalStore } from '../../../store/modalStore';

import { useState } from 'react';
import { Setting } from '../../../types/types';
import { SETTINGS } from '../../../utils/settings';
import MenuOption from '../../MenuOption/MenuOption';
import SettingOption from '../../SettingOption/SettingOption';
import { useSettingsStore } from '../../../store/settingsStore';

type MenuModalProps = {
  isOpen: boolean;
};

const DEFAULT_TITLE = 'Configuración';

const MenuModal = ({ isOpen }: MenuModalProps) => {
  const { closeModal } = useModalStore();
  const { setStimulusType, setBeat, setLanguage, setTheme, theme } =
    useSettingsStore();

  const [activeSetting, setActiveSetting] = useState<Setting | null>(null);

  const onMenuOptionClick = (setting: Setting) => {
    const isActiveSetting = activeSetting !== setting;
    setActiveSetting(isActiveSetting ? setting : null);
  };

  const onSettingOptionClick = option => {
    if (activeSetting?.name === 'Estímulo') {
      setStimulusType(option.title);
    }
    if (activeSetting?.name === 'Beat') {
      setBeat(option.title);
    }
    if (activeSetting?.name === 'Idioma') {
      setLanguage(option.title);
    }
    if (activeSetting?.name === 'Apariencia') {
      if (option.title === 'Makahco Light') {
        setTheme({ mainColor: '#fcd926', secondaryColor: '#000000' });
      } else {
        setTheme({ mainColor: '#000000', secondaryColor: '#fcd926' });
      }
    }
    setActiveSetting(null);
  };

  const onClose = () => {
    setActiveSetting(null);
    closeModal();
  };

  const isSettingActive = activeSetting !== null;

  const modalTitle = activeSetting ? activeSetting.name : DEFAULT_TITLE;

  const renderSettingsMenu = () => {
    return SETTINGS.map(setting => (
      <MenuOption
        key={setting.name}
        option={setting}
        onOptionClick={() => onMenuOptionClick(setting)}
      />
    ));
  };

  const renderSettingStep = () => {
    return (
      <div className="setting-step">
        {activeSetting?.options?.map(option => (
          <SettingOption
            key={option.title}
            icon={
              <option.icon
                width={48}
                height={48}
                color={theme.secondaryColor}
              />
            }
            title={option.title}
            description={option.description}
            onClick={() => onSettingOptionClick(option)}
          />
        ))}
      </div>
    );
  };

  return (
    <BaseModal
      title={modalTitle}
      isOpen={isOpen}
      onClose={onClose}
      onBack={() => setActiveSetting(null)}
      isOnStep={isSettingActive}
    >
      <div className="menu-content">
        {isSettingActive ? renderSettingStep() : renderSettingsMenu()}
      </div>
    </BaseModal>
  );
};

export default MenuModal;
