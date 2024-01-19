import CameraIcon from '../icons/CameraIcon';
import DiceFourIcon from '../icons/DiceFourIcon';
import DiceOneIcon from '../icons/DiceOneIcon';
import { Mode } from '../types/types';

export const MODES: Mode[] = [
  {
    name: 'CLÁSICO',
    description: '1 palabra cada patrón',
    icon: DiceOneIcon,
  },
  {
    name: 'TERMINACIONES',
    description: '4 palabras que riman cada patrón',
    icon: DiceFourIcon,
  },
  {
    name: 'IMÁGENES',
    description: '1 imagen cada patrón',
    icon: CameraIcon,
  },
];
