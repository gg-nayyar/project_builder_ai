import { create_file } from "../tools/create_file.js";

export function response_handler(action: string, filename: string, content: string): string{
    if(action === "create"){
        create_file(filename, content);
        return filename + " Created Successfully";
    }
    else{
        return "Action not specified";
    }
}