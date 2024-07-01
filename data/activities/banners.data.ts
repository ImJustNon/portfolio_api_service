import { ActivityBannerV1, ActivityBannerV2, ActivityBanners } from "../../types/activities.type";
import fs from "fs";
import path from "path";

export function getActivities(){
    let activityBanners: ActivityBanners = {};
    const scanForActivityBannerJsonFile: string[] = fs.readdirSync(path.join(__dirname, "./json")).filter(filename => filename.endsWith(".json"));
    for(const filename of scanForActivityBannerJsonFile){
        const fileData: string = fs.readFileSync(path.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData: ActivityBanners = JSON.parse(fileData);
        activityBanners = {
            ...parseJsonData,
            ...activityBanners
        }
    }

    return activityBanners;
}