import "dotenv/config";
import { chatResponse } from "./api/hf.js";
import { response_handler } from "./controller/response_handler.controller.js";

console.log(response_handler(chatResponse.action , chatResponse.filename, chatResponse.content));