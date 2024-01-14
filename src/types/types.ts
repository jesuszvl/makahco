export interface Beat {
  src: string;
  beat_drop: number;
  bpm: number;
  spb: number;
  name: string;
}

export enum StimulusType {
  WORD = 'WORD',
  IMAGE = 'IMAGE',
}

export interface Word {
  value: string;
  subword?: string;
}

export interface Stimulus {
  type: StimulusType;
  values: Word[];
}

export interface WordLibrary {
  [key: string]: string[];
}

export enum Mode {
  CLASICO = 'CLÁSICO',
  TERMINACIONES = 'TERMINACIONES',
  VISUALES = 'VISUALES',
}

export enum Modals {
  BEAT = 'BEAT',
  MODO = 'MODO',
  HELP = 'HELP',
}

export type ModalType = Modals.BEAT | Modals.MODO | Modals.HELP;

export interface Modal {
  type: ModalType;
  isOpen: boolean;
}

export type Option = Beat | Mode;
