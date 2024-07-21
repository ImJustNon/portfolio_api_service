import fs from "fs";
import path from "path";
import { Social, Socials } from "types/informations.type";

export function getSocials(){
    let socials: Socials = [];
    const scanForSocialJsonFile: string[] = fs.readdirSync(path.join(__dirname, "./json")).filter(filename => filename.endsWith(".json") && filename === "social.json");
    for(const filename of scanForSocialJsonFile){
        const fileData: string = fs.readFileSync(path.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData: Socials = JSON.parse(fileData).socials ?? [];
        socials.push(...parseJsonData);
    }

    return socials;
}