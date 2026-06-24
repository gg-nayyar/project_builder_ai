import { writeFile } from "node:fs/promises";


export async function create_file(filePath: string, content:string): Promise<string>{
    try{
        await writeFile(filePath, content, { encoding: 'utf-8' });
        return filePath + " created successfully";
    }
    catch(err){
        console.error('Error writing this file: ', err);
        throw err; 
    }
}