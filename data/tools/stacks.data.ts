import fs from "fs";
import path from "path";
import { Stack, Stacks } from "../../types/stacks.type";

export function getStacks(){
    let stacks: Stacks = {};
    const scanForStackJsonFile: string[] = fs.readdirSync(path.join(__dirname, "./json")).filter(filename => filename.endsWith(".json"));
    for(const filename of scanForStackJsonFile){
        const fileData: string = fs.readFileSync(path.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData: Stack = JSON.parse(fileData);
        stacks = {
            ...parseJsonData,
            ...stacks
        }
    }

    return stacks;
}