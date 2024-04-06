import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { COLORS } from '../utils/colors';

type Theme = {
  mainColor: string;
  secondaryColor: string;
  mainHoverColor: string;
};

interface SettingsState {
  stimulusType: string;
  beat: string;
  language: string;
  theme: Theme;
  setStimulusType: (stimulusType: string) => void;
  setBeat: (beat: string) => void;
  setLanguage: (language: string) => void;
  setTheme: (theme: Theme) => void;
}

export const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      set => ({
        stimulusType: 'CLASICO',
        beat: 'NORMAL',
        language: 'ES',
        theme: {
          mainColor: COLORS.yellow,
          secondaryColor: COLORS.darkgray,
          mainHoverColor: COLORS.hoverYellow,
        },
        setStimulusType: stimulusType => set({ stimulusType }),
        setBeat: beat => set({ beat }),
        setLanguage: language => set({ language }),
        setTheme: theme => {
          document.documentElement.style.setProperty(
            '--main-color',
            theme.mainColor,
          );
          document.documentElement.style.setProperty(
            '--secondary-color',
            theme.secondaryColor,
          );
          document.documentElement.style.setProperty(
            '--main-hover-color',
            theme.mainHoverColor,
          );

          set({ theme });
        },
      }),
      {
        name: 'settings-store',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
