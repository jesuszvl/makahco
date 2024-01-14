import { Beat } from '../types/types';

const BEATS_BASE_URL =
  'https://fsivvquhttqtxpvvfyla.supabase.co/storage/v1/object/public/beats/';

export const BEATS: Beat[] = [
  {
    src: BEATS_BASE_URL + 'reggae_1.mp3',
    beat_drop: 24,
    bpm: 84,
    spb: 12,
    name: 'Reggae',
  },
  {
    src: BEATS_BASE_URL + 'bb_1.mp3',
    beat_drop: 22,
    bpm: 87,
    spb: 11,
    name: 'Boom Bap',
  },
  {
    src: BEATS_BASE_URL + 'drill_1.mp3',
    beat_drop: 32,
    bpm: 139,
    spb: 14,
    name: 'Drill',
  },
  {
    src: BEATS_BASE_URL + 'jazz_1.mp3',
    beat_drop: 21,
    bpm: 89,
    spb: 11,
    name: 'Jazz',
  },
  {
    src: BEATS_BASE_URL + 'rock_1.mp3',
    beat_drop: 19,
    bpm: 115,
    spb: 10,
    name: 'Rock',
  },
];

export const BEAT_INITIAL = BEATS[2];
