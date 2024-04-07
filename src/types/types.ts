export type IconProps = Pick<
  React.SVGProps<SVGSVGElement>,
  'width' | 'height' | 'fill' | 'color'
>;

export interface Beat {
  src: string;
  beat_drop: number;
  bpm: number;
  spb: number;
  name: string;
  icon: React.FC<IconProps>;
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

export interface Mode {
  name: string;
  description: string;
  icon: React.FC<IconProps>;
}

export enum Step {
  INITIAL,
  LOADING,
  COUNTDOWN,
  STIMULUS,
}

export type SettingsOption = {
  icon: React.FC<IconProps>;
  title: string;
  description: string;
};

export type Setting = {
  name: string;
  description: string;
  options?: SettingsOption[];
};

export type Theme = {
  name: string;
  primaryColor: string;
  secondaryColor: string;
  hoverPrimaryColor: string;
  hoverSecondaryColor: string;
};
