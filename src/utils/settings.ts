import BoomBapIcon from '../icons/BoomBapIcon';
import CameraIcon from '../icons/CameraIcon';
import DiceFourIcon from '../icons/DiceFourIcon';
import DiceOneIcon from '../icons/DiceOneIcon';
import DrillIcon from '../icons/DrillIcon';
import LionIcon from '../icons/LionIcon';
import MexicoIcon from '../icons/MexicoIcon';
import MoonIcon from '../icons/MoonIcon';
import RockIcon from '../icons/RockIcon';
import SaxIcon from '../icons/SaxIcon';
import SunIcon from '../icons/SunIcon';
import UnitedStatesIcon from '../icons/UnitedStatesIcon';
import { Setting } from '../types/types';

export const SETTINGS: Setting[] = [
  {
    name: 'Estímulo',
    description: 'Cambia el modo de juego',
    options: [
      {
        title: 'Clásico',
        description: '1 palabra por patrón',
        icon: DiceOneIcon,
      },
      {
        title: 'Terminaciones',
        description: '4 palabras que riman por patrón',
        icon: DiceFourIcon,
      },
      {
        title: 'Imágenes',
        description: '1 imagen por patrón',
        icon: CameraIcon,
      },
    ],
  },
  {
    name: 'Beat',
    description: 'Cambia el beat',
    options: [
      {
        title: 'Boom Bap',
        description: '120 BPM',
        icon: BoomBapIcon,
      },
      {
        title: 'Jazz',
        description: '140 BPM',
        icon: SaxIcon,
      },
      {
        title: 'Rock',
        description: '100 BPM',
        icon: RockIcon,
      },
      {
        title: 'Drill',
        description: '90 BPM',
        icon: DrillIcon,
      },
      {
        title: 'Reggae',
        description: '82 BPM',
        icon: LionIcon,
      },
    ],
  },
  {
    name: 'Idioma',
    description: 'Cambia el idioma',
    options: [
      {
        title: 'Español',
        description: 'Español',
        icon: MexicoIcon,
      },
      {
        title: 'Inglés',
        description: 'Inglés',
        icon: UnitedStatesIcon,
      },
    ],
  },
  {
    name: 'Apariencia',
    description: 'Cambia el esquema de color',
    options: [
      {
        title: 'Makahco Light',
        description: 'Fondo blanco',
        icon: SunIcon,
      },
      {
        title: 'Makahco Dark',
        description: 'Fondo Oscuro',
        icon: MoonIcon,
      },
    ],
  },
];
