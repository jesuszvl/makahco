export interface Beat {
  src: string;
  beat_drop: number;
  bpm: number;
  spb: number;
  name: string;
  author: string;
}

const BEATS_BASE_URL =
  "https://fsivvquhttqtxpvvfyla.supabase.co/storage/v1/object/public/beats/";

export const BEATS: Beat[] = [
  {
    src: BEATS_BASE_URL + "base_1.mp3",
    beat_drop: 20,
    bpm: 94,
    spb: 10,
    name: "Reggae",
    author: "Muelas de Gallo",
  },
  {
    src: BEATS_BASE_URL + "base_2.mp3",
    beat_drop: 24,
    bpm: 79,
    spb: 12,
    name: "Boom Bap",
    author: "Saul Goodman",
  },
  {
    src: BEATS_BASE_URL + "base_3.mp3",
    beat_drop: 24,
    bpm: 81,
    spb: 11,
    name: "Drill",
    author: "Michael Scott",
  },
  {
    src: BEATS_BASE_URL + "base_4.mp3",
    beat_drop: 21,
    bpm: 90,
    spb: 11,
    name: "Jazz",
    author: "Eddie Kaspbrak",
  },
  {
    src: BEATS_BASE_URL + "base_5.mp3",
    beat_drop: 19,
    bpm: 100,
    spb: 10,
    name: "Rock",
    author: "Walter White",
  },
];

export const BEAT_INITIAL = BEATS[0];

export const getRandomBeat = (): Beat => {
  const randomIndex = Math.floor(Math.random() * BEATS.length);
  return BEATS[randomIndex];
};
