import {parseArgs} from 'node:util';

const { positionals } = parseArgs({
    allowPositionals: true,
})

console.log("Positionals: ", positionals[0]);
export const cliPrompt = positionals[0] as string;
