import { create } from 'zustand';
import { BEATS } from '../utils/beats';
import { Beat, Mode, ModalType, Modals } from '../types/types';

interface BeatState {
  beat: Beat;
  mode: Mode;
  modalType: ModalType;
  isModalOpen: boolean;
  updateBeat: (newBeat: Beat) => void;
  updateMode: (newMode: Mode) => void;
  updateModalType: (newModalType: ModalType) => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useBeatStore = create<BeatState>(set => ({
  beat: BEATS[0],
  mode: Mode.CLASICO,
  modalType: Modals.MODO,
  isModalOpen: false,
  updateBeat: newBeat => set({ beat: newBeat }),
  updateMode: newMode => set({ mode: newMode }),
  updateModalType: newModalType => set({ modalType: newModalType }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));
