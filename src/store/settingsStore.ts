import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { Theme } from '../types/types';
import { setCSSVariables, THEMES } from '../utils/themes';

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
        stimulusType: 'Clásico',
        beat: 'NORMAL',
        language: 'ES',
        theme: THEMES[0],
        setStimulusType: stimulusType => set({ stimulusType }),
        setBeat: beat => set({ beat }),
        setLanguage: language => set({ language }),
        setTheme: theme => {
          setCSSVariables(theme);
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
