import { create } from "zustand";
import { BEATS } from "../utils/beats";
import { Beat, Mode, Setting } from "../types/types";

interface BeatState {
  beat: Beat;
  mode: Mode;
  setting: Setting;
  isModalOpen: boolean;
  updateBeat: (newBeat: Beat) => void;
  updateMode: (newMode: Mode) => void;
  updateSetting: (newSetting: Setting) => void;
  openModal: () => void;
  closeModal: () => void;
  getCurrentSettingValue: () => string;
}

export const useBeatStore = create<BeatState>((set, get) => ({
  beat: BEATS[0],
  mode: Mode.CLASICO,
  setting: Setting.MODO,
  isModalOpen: false,
  updateBeat: (newBeat) => set({ beat: newBeat }),
  updateMode: (newMode) => set({ mode: newMode }),
  updateSetting: (newSetting) => set({ setting: newSetting }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  getCurrentSettingValue: () => {
    const { beat, mode, setting } = get();
    if (setting === Setting.MODO) return mode;
    if (setting === Setting.BEAT) return beat.name;
    return "";
  },
}));
