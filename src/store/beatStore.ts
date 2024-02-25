import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

import { Beat, Mode } from '../types/types';
import { MODES } from '../utils/modes';
import { BEATS } from '../utils/beats';

interface BeatState {
  beatIndex: number;
  modeIndex: number;
  updateBeatIndex: (newBeatIndex: number) => void;
  updateModeIndex: (newModeIndex: number) => void;
  getCurrentBeat: () => Beat;
  getCurrentMode: () => Mode;
}

export const useBeatStore = create<BeatState>()(
  devtools(
    persist(
      (set, get) => {
        return {
          beatIndex: 0,
          modeIndex: 0,
          updateBeatIndex: newBeatIndex => set({ beatIndex: newBeatIndex }),
          updateModeIndex: newModeIndex => set({ modeIndex: newModeIndex }),
          getCurrentBeat: () => {
            const { beatIndex } = get();
            return BEATS[beatIndex];
          },
          getCurrentMode: () => {
            const { modeIndex } = get();
            return MODES[modeIndex];
          },
        };
      },
      { name: 'beat-store', storage: createJSONStorage(() => sessionStorage) },
    ),
  ),
);
