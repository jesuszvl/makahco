import { terminaciones, terminacionesList } from "./wordLibrary";
import { createApi } from "unsplash-js";

export interface Stimulus {
  type: string;
  values: string[];
}

export const STIMULUS_INITIAL = {
  type: "word",
  values: ["clic a play"],
};

const unsplash = createApi({
  accessKey: "XQUR9hAy9HQRFMAyzLhsIbz6U_M9tfEa5R_kMJvXc08",
});

export const getRandomImage = async () => {
  try {
    const res = await unsplash.photos.getRandom({});
    if (!res.errors) {
      const randomImage = Array.isArray(res.response)
        ? res.response[0]
        : res.response;
      return randomImage.urls.small;
    }
  } catch (error) {
    console.error(error);
  }
  return "";
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
