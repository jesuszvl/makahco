import { create } from "zustand";
import { BEATS, Beat } from "../utils/beats";

interface BeatState {
  beat: Beat;
  updateBeat: (newBeat: Beat) => void;
}

export const useBeatStore = create<BeatState>()((set) => ({
  beat: BEATS[0],
  updateBeat: (newBeat) => set({ beat: newBeat }),
}));
