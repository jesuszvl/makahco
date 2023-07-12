import { Configuration, OpenAIApi } from "openai";
import {
  getRandomWordCategory,
  getRandomWordFromArray,
  getRandomImageFromArray,
} from "../../src/utils/randomUtils";
import { isFeatureFlagEnabled } from "../../src/utils/apptimize";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_SECRET,
  organization: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION,
});

const openai = new OpenAIApi(configuration);

const useOpenAI = isFeatureFlagEnabled("new_feature_flag_variable"); // Set this flag to true to use OpenAI API, or false to use local array

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

      return { word: randomWord, category: randomCategory };
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }

      const randomWord = getRandomWordFromArray(randomCategory);
      return { word: randomWord, category: randomCategory };
    }
  } else {
    // Use local array of words instead
    const randomWord = getRandomWordFromArray(randomCategory);
    return { word: randomWord, category: randomCategory };
  }
}

export async function getRandomImage() {
  //const randomCategory = getRandomWordCategory();

  // if (useOpenAI) {
  //   try {
  //     const completion = await openai.createChatCompletion({
  //       model: "gpt-3.5-turbo",
  //       messages: [
  //         {
  //           role: "user",
  //           content:
  //             "1 palabra comun y aleatoria en español. Maximo 15 caracteres. Categoria: " +
  //             randomCategory,
  //         },
  //       ],
  //       temperature: 2,
  //     });
  //     const randomWord = completion.data.choices[0].message.content
  //       .trim()
  //       .replace(/[".]/g, " ");

  //     return { word: randomWord, category: randomCategory };
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response.status);
  //       console.log(error.response.data);
  //     } else {
  //       console.log(error.message);
  //     }

  //     const randomWord = getRandomWordFromArray(randomCategory);
  //     return { word: randomWord, category: randomCategory };
  //   }
  // } else {
  // Use local array of words instead
  const randomImage = getRandomImageFromArray();
  return randomImage;
  //}
}
