import "dotenv/config";
import HF_LLM from "./api/hf.js";
import { cliPrompt } from "./prompts/cli.js";
import { response_handler } from "./controller/response_handler.controller.js";

const chatResponse = await HF_LLM(cliPrompt);

console.log(await response_handler(chatResponse.action , chatResponse.filename, chatResponse.content));