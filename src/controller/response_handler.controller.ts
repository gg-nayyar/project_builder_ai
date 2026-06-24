import HF_LLM from "../api/hf.js";
import { read_file } from "../tools/read_file.js";
import { create_file } from "../tools/create_file.js";

export async function response_handler(action: string, filename: string, content: string){
    if(action === "create"){
        await create_file(filename, content);
        return filename + " Created Successfully";
    }
    else if(action === "read"){
        const content = await read_file(filename);
        const prompt = "explain this code: " + content;
        console.log(prompt);
        const response = await HF_LLM(prompt);
        return "DESCRIPTION: " + response.description;
    }
    else{
        return "Action not specified";
    }
}