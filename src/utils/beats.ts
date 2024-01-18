import BoomBapIcon from '../icons/BoomBapIcon';
import DrillIcon from '../icons/Drillicon';
import LionIcon from '../icons/LionIcon';
import RockIcon from '../icons/RockIcon';
import SaxIcon from '../icons/SaxIcon';
import { Beat } from '../types/types';

const BASE_URL =
  'https://fsivvquhttqtxpvvfyla.supabase.co/storage/v1/object/public/';

export const BEATS: Beat[] = [
  {
    src: BASE_URL + 'beats/bb_1.mp3',
    beat_drop: 32,
    bpm: 139,
    spb: 14,
    name: 'Boom Bap',
    icon: BoomBapIcon,
  },
  {
    src: BASE_URL + 'beats/reggae_1.mp3',
    beat_drop: 20,
    bpm: 96,
    spb: 10,
    name: 'Reggae',
    icon: LionIcon,
  },
  {
    src: BASE_URL + 'beats/jazz_1.mp3',
    beat_drop: 22,
    bpm: 87,
    spb: 11,
    name: 'Jazz',
    icon: SaxIcon,
  },
  {
    src: BASE_URL + 'beats/drill_1.mp3',
    beat_drop: 32,
    bpm: 139,
    spb: 14,
    name: 'Drill',
    icon: DrillIcon,
  },
  {
    src: BASE_URL + 'beats/rock_1.mp3',
    beat_drop: 32,
    bpm: 139,
    spb: 14,
    name: 'Rock',
    icon: RockIcon,
  },
];

export const BEAT_INITIAL = BEATS[2];
