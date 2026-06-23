import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function create_file(filename: string, content:string): Promise<string>{
    try{
        const generatedFolder = path.join(__dirname, '../', '../','generated');
        const filePath = path.join(generatedFolder, filename);
        await fs.mkdir(generatedFolder, { recursive: true }, (err)=>{
            if(err) throw err;
        });
        await writeFile(filePath, content, { encoding: 'utf-8' });
        return filename + " created successfully";
    }
    catch(err){
        console.error('Error writing this file: ', err);
        throw err; 
    }
}