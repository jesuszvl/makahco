import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface SettingsState {
  stimulusType: string;
  beat: string;
  language: string;
  theme: string;
  setStimulusType: (stimulusType: string) => void;
  setBeat: (beat: string) => void;
  setLanguage: (language: string) => void;
  setTheme: (theme: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  devtools(set => ({
    stimulusType: 'CLASICO',
    beat: 'NORMAL',
    language: 'ES',
    theme: 'LIGHT',
    setStimulusType: stimulusType => set({ stimulusType }),
    setBeat: beat => set({ beat }),
    setLanguage: language => set({ language }),
    setTheme: theme => set({ theme }),
  })),
);
