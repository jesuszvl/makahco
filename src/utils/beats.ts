import BoomBapIcon from '../icons/BoomBapIcon';
import DrillIcon from '../icons/DrillIcon';
import LionIcon from '../icons/LionIcon';
import RockIcon from '../icons/RockIcon';
import SaxIcon from '../icons/SaxIcon';
import { Beat } from '../types/types';

const BASE_URL =
  'https://fsivvquhttqtxpvvfyla.supabase.co/storage/v1/object/public/';

export const BEATS: Beat[] = [
  {
    src: BASE_URL + 'beats/bb_1.mp3',
    beat_drop: 22,
    bpm: 87,
    spb: 11,
    name: 'BOOM BAP',
    icon: BoomBapIcon,
  },
  {
    src: BASE_URL + 'beats/reggae_1.mp3',
    beat_drop: 24,
    bpm: 84,
    spb: 12,
    name: 'REGGAE',
    icon: LionIcon,
  },
  {
    src: BASE_URL + 'beats/jazz_1.mp3',
    beat_drop: 21,
    bpm: 89,
    spb: 11,
    name: 'JAZZ',
    icon: SaxIcon,
  },
  {
    src: BASE_URL + 'beats/drill_1.mp3',
    beat_drop: 32,
    bpm: 139,
    spb: 14,
    name: 'DRILL',
    icon: DrillIcon,
  },
  {
    src: BASE_URL + 'beats/rock_1.mp3',
    beat_drop: 19,
    bpm: 115,
    spb: 10,
    name: 'ROCK',
    icon: RockIcon,
  },
];

export const BEAT_INITIAL = BEATS[0];
