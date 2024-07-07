import { getActivityBanners } from "../data/activities/banners.data";
import { getActivities } from "../data/activities/activities.data";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Activities, Activity, ActivityBannerCategory, ActivityBanners, ActivityCategory } from "types/activities.type";

function getActivityAll(req: Request, res: Response): void {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: getActivities()
    });
    return;
}

function getActivityById(req: Request, res: Response): void {
    const { id } = req.params;

    const allActivities: Activities = getActivities();
    const allActivitiesArray: Activity[] = Object.values(allActivities).flat();

    const filterActivityDataById: Activity[] = allActivitiesArray.filter((cert: Activity) => cert.id === id);

    res.json({
        status: "OK",
        message: "This is certificate data",
        data: filterActivityDataById[0] ?? [],
    });
    return;
}

function getActivityByCategory(req: Request, res: Response): void {
    const category: ActivityCategory = req.params.category as ActivityCategory;

    const allActivities: Activities = getActivities();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: allActivities[category] ?? [],
    });
    return;
}

function getActivityBannerAll(req: Request, res: Response): void {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: getActivityBanners()
    });
    return;
}

function getActivityBannerByCategory(req: Request, res: Response): void {
    const category: ActivityBannerCategory = req.params.category as ActivityBannerCategory;

    const allActivityBanners: ActivityBanners = getActivityBanners();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: allActivityBanners[category] ?? [],
    });
    return;
}

export {
    getActivityAll,
    getActivityById,
    getActivityByCategory,
    getActivityBannerAll,
    getActivityBannerByCategory
}