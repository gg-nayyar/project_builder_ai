import "dotenv/config";
import { chatCompletion } from "./api/hf.js";

console.log("Response: ", chatCompletion.choices[0]?.message.content);