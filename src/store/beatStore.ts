import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { BEATS } from '../utils/beats';
import { Beat, Mode } from '../types/types';

interface BeatState {
  beat: Beat;
  mode: Mode;
  updateBeat: (newBeat: Beat) => void;
  updateMode: (newMode: Mode) => void;
}

export const useBeatStore = create<BeatState>()(
  devtools(
    persist(
      set => ({
        beat: BEATS[0],
        mode: Mode.CLASICO,
        updateBeat: newBeat => set({ beat: newBeat }),
        updateMode: newMode => set({ mode: newMode }),
      }),
      { name: 'beat-store', storage: createJSONStorage(() => sessionStorage) },
    ),
  ),
);
