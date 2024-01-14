import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ModalType, Modals } from '../types/types';

interface ModalState {
  type: ModalType;
  isOpen: boolean;
  updateType: (newType: ModalType) => void;
  openModal: () => void;
  closeModal: () => void;
  openModalType: (newType: ModalType) => void;
}

export const useModalStore = create<ModalState>()(
  devtools(set => ({
    type: Modals.MODO,
    isOpen: false,
    updateType: newType => set({ type: newType }),
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
    openModalType: newType => set({ type: newType, isOpen: true }),
  })),
);
