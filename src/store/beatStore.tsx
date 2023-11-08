import { create } from "zustand";
import { BEATS, Beat } from "../utils/beats";

type ModalType = "beats" | "settings" | "none";
export type Mode = "clásico" | "terminaciones" | "visuales";

interface Modal {
  type: ModalType;
  isOpen: boolean;
}

interface BeatState {
  beat: Beat;
  modal: Modal;
  mode: Mode;
  updateBeat: (newBeat: Beat) => void;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  updateMode: (newMode: Mode) => void;
}

export const useBeatStore = create<BeatState>()((set) => ({
  beat: BEATS[0],
  modal: { type: "none", isOpen: false },
  mode: "clásico",
  updateBeat: (newBeat) => set({ beat: newBeat }),
  openModal: (type) =>
    set((state) => ({ modal: { ...state.modal, isOpen: true, type: type } })),
  closeModal: () =>
    set((state) => ({ modal: { ...state.modal, isOpen: false } })),
  updateMode: (newMode) => set({ mode: newMode }),
}));
