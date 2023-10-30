import { terminaciones, terminacionesList } from "./wordLibrary";

export interface Stimulus {
  type: string;
  values: string[];
}

export const STIMULUS_INITIAL = {
  type: "word",
  values: ["clic a play"],
};

export const getRandomFourCategory = () => {
  const randomIndex = Math.floor(Math.random() * terminacionesList.length);
  return terminacionesList[randomIndex];
};

export const getRandomFromArray = (fourCategory: string, size = 1) => {
  const categorySet = terminaciones[fourCategory];
  const randomFour = categorySet.sort(() => 0.5 - Math.random()).slice(0, size);
  return randomFour;
};

export const getRandomWords = async (size = 4): Promise<string[]> => {
  const randomFourCategory = getRandomFourCategory();
  return getRandomFromArray(randomFourCategory, size);
};
