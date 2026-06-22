import { writeFile } from "node:fs/promises";

export async function create_file(filename: string, content:string): Promise<string>{
    try{
        await writeFile(filename, content, { encoding: 'utf-8' });
        return filename + " created successfully";
    }
    catch(err){
        console.error('Error writing this file: ', err);
        throw err; 
    }
}