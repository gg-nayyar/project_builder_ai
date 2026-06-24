import fs from 'fs';
import path from 'node:path';
import HF_LLM from "../api/hf.js";
import { fileURLToPath } from 'node:url';
import { read_file } from "../tools/read_file.js";
import { create_file } from "../tools/create_file.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function response_handler(action: string, filename: string, content: string, user_prompt: string){
    if(action === "create"){
        const generatedFolder = path.join(__dirname, '../', '../','generated');
        const filePath = path.join(generatedFolder, filename);
        await fs.mkdir(generatedFolder, { recursive: true }, (err)=>{
            if(err) throw err;
        });
        await create_file(filePath, content);
        return filename + " Created Successfully";
    }
    else if(action === "read"){
        const content = await read_file(filename);
        const prompt = "explain this code: " + content;
        console.log(prompt);
        const response = await HF_LLM(prompt);
        return "DESCRIPTION: " + response.description;
    }
    else if(action === "edit"){
        const content = await read_file(filename);
        const prompt = {
            "action": "edit",
            "filename": filename,
            "content": content,
            "user_prompt": user_prompt
        }
        console.log("SENDING THIS PROMPT: ", prompt as unknown as string)
        const edited_content = await HF_LLM("FILE: " + content + "INSTRUCTION: " + user_prompt + "FILENAME: " + filename);
        // console.log(edit_content.message);
        await create_file(filename, edited_content.content);
        return filename + " Edited Successfully";
    }
    else{
        return "Action not specified";
    }
}