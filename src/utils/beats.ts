export interface Beat {
  src: string;
  beat_drop: number;
  bpm: number;
  spb: number;
}

const BEATS_BASE_URL =
  "https://fsivvquhttqtxpvvfyla.supabase.co/storage/v1/object/public/beats/";

export const BEAT_INITIAL = { src: "", beat_drop: 10, bpm: 94, spb: 10 };

export const BEATS: Beat[] = [
  {
    src: BEATS_BASE_URL + "base_1.mp3",
    beat_drop: 20,
    bpm: 94,
    spb: 10,
  },
  {
    src: BEATS_BASE_URL + "base_2.mp3",
    beat_drop: 24,
    bpm: 79,
    spb: 12,
  },
  {
    src: BEATS_BASE_URL + "base_3.mp3",
    beat_drop: 24,
    bpm: 81,
    spb: 11,
  },
  {
    src: BEATS_BASE_URL + "base_4.mp3",
    beat_drop: 21,
    bpm: 90,
    spb: 11,
  },
  {
    src: BEATS_BASE_URL + "base_5.mp3",
    beat_drop: 19,
    bpm: 100,
    spb: 10,
  },
];

export const getRandomBeat = (): Beat => {
  const randomIndex = Math.floor(Math.random() * BEATS.length);
  return BEATS[randomIndex];
};
