import { Activity, Activities } from "../../types/activities.type";
import fs from "fs";
import path from "path";

export function getActivities(){
    let activities: Activities = {};
    const scanForActivityJsonFile: string[] = fs.readdirSync(path.join(__dirname, "./json")).filter(filename => filename.endsWith(".json"));
    for(const filename of scanForActivityJsonFile){
        const fileData: string = fs.readFileSync(path.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData: Activity = JSON.parse(fileData);
        activities = {
            ...parseJsonData,
            ...activities
        }
    }

    return activities;
}