import { InferenceClient } from "@huggingface/inference";
import { cliPrompt } from "../prompts/cli.js";


const client = new InferenceClient(process.env.HF_TOKEN);

console.log("CLI Prompt: ", cliPrompt);
export const chatCompletion = await client.chatCompletion({
    model: "deepseek-ai/DeepSeek-V4-Flash:novita",
    messages: [
        {
            role: "user",
            content: cliPrompt,
        },
    ],
});