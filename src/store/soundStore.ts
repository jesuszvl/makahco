import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { BEAT_INITIAL } from '../utils/beats';
import { Howl } from 'howler';

interface SoundState {
  sound: Howl;
  updateSound: (newSound: Howl) => void;
}

export const useSoundStore = create<SoundState>()(
  devtools(set => ({
    sound: new Howl({
      src: BEAT_INITIAL.src,
      preload: true,
    }),
    updateSound: newSound => set({ sound: newSound }),
  })),
);
