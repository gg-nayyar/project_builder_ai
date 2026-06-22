import { InferenceClient } from "@huggingface/inference";
import { cliPrompt } from "../prompts/cli.js";


const client = new InferenceClient(process.env.HF_TOKEN);

const systemInstruction = `
You are an advanced Code Generator and file-system assistant. Your job is to create, edit, or delete files based on the user's prompt. 

You must respond ONLY with a JSON object matching this exact schema:
{
  "action": "string (must be exactly 'create', 'edit', or 'delete')",
  "filename": "string (the target filename, derived from the prompt or inferred context)",
  "content": "string (the content of the file to be created, edited, or deleted)",
  "description": "string (a clear explanation of the changes, your thought process, and the logic behind the code)"
}

Do not include any markdown formatting like \`\`\`json or conversational filler text. Respond with pure JSON.
`;

// console.log("CLI Prompt: ", cliPrompt);
const response = await client.chatCompletion({
    response_format: { type: "json_object" },
    model: "deepseek-ai/DeepSeek-V4-Flash:novita",
    messages: [
        {
            role: "user",
            content: cliPrompt,
        },
        {
            role: "system",
            content: systemInstruction,
        }
    ],
});
export const chatResponse = JSON.parse(response.choices[0]?.message.content as string);