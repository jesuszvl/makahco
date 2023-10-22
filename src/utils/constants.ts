export const MODES = [
  { id: "IZI", label: "Clásico" },
  { id: "4FB", label: "4 x Barra" },
  { id: "IMG", label: "Imágenes" },
];

const BASE_URL =
  "https://fsivvquhttqtxpvvfyla.supabase.co/storage/v1/object/public/beats/";

export const beats = [
  {
    src: BASE_URL + "base_1.mp3",
    beat_drop: 20,
    bpm: 94,
    spb: 10,
  },
  {
    src: BASE_URL + "base_2.mp3",
    beat_drop: 24,
    bpm: 79,
    spb: 12,
  },
  {
    src: BASE_URL + "base_3.mp3",
    beat_drop: 24,
    bpm: 81,
    spb: 11,
  },
  {
    src: BASE_URL + "base_4.mp3",
    beat_drop: 21,
    bpm: 90,
    spb: 11,
  },
  {
    src: BASE_URL + "base_5.mp3",
    beat_drop: 19,
    bpm: 100,
    spb: 10,
  },
];
