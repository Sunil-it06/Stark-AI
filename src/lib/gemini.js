// // node --version # Should be >= 18
// // npm install @google/generative-ai

// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";
// import dotenv from 'dotenv'

// const MODEL_NAME = "gemini-1.0-pro";
// const API_KEY = process.env.KEY;

// async function runChat(prompt) {
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//   const generationConfig = {
//     temperature: 0.9,
//     topK: 1,
//     topP: 1,
//     maxOutputTokens: 2048,
//   };

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//   ];

//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [],
//   });

//   const result = await chat.sendMessage(prompt);
//   const response = result.response;
//   console.log(response.text());
//   return response.text();
// }

// export default runChat;



// Ensure Node.js version >= 18
// Install dependencies: npm install @google/generative-ai dotenv

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "./src/.env") });


// Load environment variables
//dotenv.config();
//console.log('api', process.env.API_KEY)

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.API_KEY;
 

// if (!API_KEY) {
//   throw new Error("Missing API key! Please set KEY in your .env file.");
// }

async function runChat(prompt) {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });

    const result = await chat.sendMessage(prompt);
    const responseText = await result.response.text(); // Await here

    console.log(responseText);
    return responseText;
  } catch (error) {
    console.error("Error in runChat:", error);
    return "Error: Unable to process your request.";
  }
}

export default runChat;

