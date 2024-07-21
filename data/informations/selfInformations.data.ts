import fs from "fs";
import path from "path";
import { SchoolInformation, SelfInformation, SelfInformations } from "types/informations.type";

export function getSelfInformations(){
    let selfInformations: SelfInformations = {};
    const scanForSelfInformationJsonFile: string[] = fs.readdirSync(path.join(__dirname, "./json")).filter(filename => filename.endsWith(".json") && filename !== "school.json" && filename !== "social.json");
    for(const filename of scanForSelfInformationJsonFile){
        const fileData: string = fs.readFileSync(path.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData: SelfInformation = JSON.parse(fileData);
        selfInformations = {
            ...parseJsonData,
            ...selfInformations
        }
    }
    // scan for schools datas
    const scanForSchoolInformationJsonFile: string[] = fs.readdirSync(path.join(__dirname, "./json")).filter(filename => filename.endsWith(".json") && filename === "school.json");
    for(const filename of scanForSchoolInformationJsonFile){
        const fileData: string = fs.readFileSync(path.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData: SchoolInformation = JSON.parse(fileData);
        selfInformations = {
            ...parseJsonData,
            ...selfInformations
        }
    }

    return selfInformations;
}