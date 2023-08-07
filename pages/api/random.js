import {
  getRandomFourCategory,
  getRandomFromArray,
} from "../../src/utils/randomUtils";

export async function getRandomWords(size = 4) {
  const randomFourCategory = getRandomFourCategory();
  return getRandomFromArray(randomFourCategory, size);
}
