import { beats } from "./constants";
import { terminaciones, terminacionesList } from "./wordLibrary";

export function getRandomFromArray(fourCategory, size = 1) {
  const categorySet = terminaciones[fourCategory];
  const randomFour = categorySet.sort(() => 0.5 - Math.random()).slice(0, size);
  return randomFour;
}

export function getRandomFourCategory() {
  const randomIndex = Math.floor(Math.random() * terminacionesList.length);
  return terminacionesList[randomIndex];
}

export function getRandomBeat() {
  const randomIndex = Math.floor(Math.random() * beats.length);
  return beats[randomIndex];
}

export function getSizeOfLongestWord(words) {
  let longestWordLength = 0;
  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    if (wordLength > longestWordLength) {
      longestWordLength = wordLength;
    }
  }
  return longestWordLength;
}
