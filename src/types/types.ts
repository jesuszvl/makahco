export interface Beat {
  src: string;
  beat_drop: number;
  bpm: number;
  spb: number;
  name: string;
}

export interface Stimulus {
  type: string;
  values: string[];
}

export interface WordLibrary {
  [key: string]: string[];
}

export type Mode = "clásico" | "terminaciones" | "visuales";

export type ModalType = "beats" | "mode" | "none";

export interface Modal {
  type: ModalType;
  isOpen: boolean;
}

export type Option = Beat | Mode;
