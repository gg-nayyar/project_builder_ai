import { readFile } from "fs/promises";

export async function read_file(filename: string){
    try{
        const data = await readFile(filename, 'utf-8');
        return data;
    }
    catch(err){
        console.error("Error while loading the file: ", err);
    }

}