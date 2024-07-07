import { ActivityBannerV1, ActivityBannerV2, ActivityBanners } from "../../types/activities.type";
import fs from "fs";
import path from "path";

export function getActivityBanners(){
    let activityBanners: ActivityBanners = {};
    const readActivityBannerJsonFile: string = fs.readFileSync(path.join(__dirname, "./json", "banners.json"), {
        encoding: "utf8",
    });

    const parseJsonData: ActivityBanners = JSON.parse(readActivityBannerJsonFile);
    activityBanners = {
        ...parseJsonData
    }

    return activityBanners;
}