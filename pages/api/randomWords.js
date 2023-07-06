import { Configuration, OpenAIApi } from "openai";
import { getRandomWordFromArray } from "../../src/utils/randomWordsBank";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_SECRET,
  organization: process.env.NEXT_PUBLIC_OPENAI_ORGANIZATION,
});

const openai = new OpenAIApi(configuration);

const useOpenAI = false; // Set this flag to true to use OpenAI API, or false to use local array

export async function getRandomSpanishWord() {
  if (useOpenAI) {
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:
          "Genera una palabra random que tenga más de 5 letras pero menos de 10",
        max_tokens: 10,
      });
      const randomWord = completion.data.choices[0].text.trim();
      return randomWord;
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }

      const randomWord = getRandomWordFromArray();
      return randomWord;
    }
  } else {
    // Use local array of words instead
    const randomWord = getRandomWordFromArray();
    return randomWord;
  }
}
