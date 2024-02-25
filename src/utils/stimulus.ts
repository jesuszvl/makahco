import { Stimulus, StimulusType } from '../types/types';
import { terminaciones, terminacionesList } from './wordLibrary';
import { createApi } from 'unsplash-js';

export const STIMULUS_INITIAL: Stimulus = {
  type: StimulusType.WORD,
  values: [
    {
      value: 'MAKAHCO',
      subword: 'PRESIONA PLAY PARA INICIAR',
    },
  ],
};

export const STIMULUS_LOADING: Stimulus = {
  type: StimulusType.WORD,
  values: [
    {
      value: 'MAKAHCO',
      subword: 'PRESIONA PLAY PARA INICIAR',
    },
  ],
};

const unsplash = createApi({
  accessKey: 'XQUR9hAy9HQRFMAyzLhsIbz6U_M9tfEa5R_kMJvXc08',
});

export const getRandomImage = async (): Promise<Stimulus> => {
  try {
    const res = await unsplash.photos.getRandom({});
    if (!res.errors) {
      const randomImage = Array.isArray(res.response)
        ? res.response[0]
        : res.response;

      return {
        type: StimulusType.IMAGE,
        values: [{ value: randomImage.urls.small, subword: '' }],
      };
    }
  } catch (error) {
    console.error(error);
  }
  return {
    type: StimulusType.IMAGE,
    values: [{ value: '', subword: '' }],
  };
};

export const getRandomFourCategory = () => {
  const randomIndex = Math.floor(Math.random() * terminacionesList.length);
  return terminacionesList[randomIndex];
};

export const getRandomFromArray = (fourCategory: string, size = 1) => {
  const categorySet = terminaciones[fourCategory];
  const randomFour = categorySet.sort(() => 0.5 - Math.random()).slice(0, size);
  const randomFourWithoutSubword = randomFour.map(word => ({
    value: word,
  }));
  return randomFourWithoutSubword;
};

export const getRandomWords = async (size = 4): Promise<Stimulus> => {
  const values = getRandomFromArray(getRandomFourCategory(), size);
  return {
    type: StimulusType.WORD,
    values,
  };
};
