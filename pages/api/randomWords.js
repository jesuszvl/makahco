import { Configuration, OpenAIApi } from "openai";

import { isFeatureFlagEnabled } from "../../src/utils/apptimize";
import {
  getRandomFourCategory,
  getRandomFourFromArray,
  getRandomImageFromArray,
  getRandomWordCategory,
  getRandomWordFromArray,
} from "../../src/utils/randomUtils";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_SECRET,
  organization: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION,
});

const openai = new OpenAIApi(configuration);

const useOpenAI = isFeatureFlagEnabled("new_feature_flag_variable"); // Set this flag to true to use OpenAI API, or false to use local array

export async function getRandomFour() {
  const randomFourCategory = getRandomFourCategory();
  return getRandomFourFromArray(randomFourCategory);
}

export async function getRandomSpanishWord() {
  const randomCategory = getRandomWordCategory();

  if (useOpenAI) {
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              "1 palabra comun y aleatoria en español. Maximo 15 caracteres. Categoria: " +
              randomCategory,
          },
        ],
        temperature: 2,
      });
      const randomWord = completion.data.choices[0].message.content
        .trim()
        .replace(/[".]/g, " ");

      return [randomWord];
    } catch (error) {
      const randomWord = getRandomWordFromArray(randomCategory);
      return [randomWord];
    }
  } else {
    // Use local array of words instead
    const randomWord = getRandomWordFromArray(randomCategory);
    return [randomWord];
  }
}

export async function getRandomImage() {
  return getRandomImageFromArray();
}
