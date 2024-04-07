import './MenuModal.css';
import BaseModal from '../BaseModal/BaseModal';
import { useModalStore } from '../../../store/modalStore';

import { useState } from 'react';
import { Setting } from '../../../types/types';
import { SETTINGS } from '../../../utils/settings';
import MenuOption from '../../MenuOption/MenuOption';
import SettingOption from '../../SettingOption/SettingOption';
import { useSettingsStore } from '../../../store/settingsStore';
import { THEMES } from '../../../utils/themes';

type MenuModalProps = {
  isOpen: boolean;
};

const DEFAULT_TITLE = 'Configuración';

const MenuModal = ({ isOpen }: MenuModalProps) => {
  const { closeModal } = useModalStore();
  const {
    setStimulusType,
    setBeat,
    setLanguage,
    setTheme,
    theme,
    stimulusType,
    beat,
    language,
  } = useSettingsStore();

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
        setTheme(THEMES[0]);
      } else {
        setTheme(THEMES[1]);
      }
    }
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

  const isSettingOptionActive = option => {
    if (activeSetting?.name === 'Estímulo') {
      return option.title === stimulusType;
    }
    if (activeSetting?.name === 'Beat') {
      return option.title === beat;
    }
    if (activeSetting?.name === 'Idioma') {
      return option.title === language;
    }
    if (activeSetting?.name === 'Apariencia') {
      return option.title === theme.name;
    }
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
            isActive={isSettingOptionActive(option)}
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
