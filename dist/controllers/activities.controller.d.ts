import { Request, Response } from "express";
declare function getActivityAll(req: Request, res: Response): void;
declare function getActivityById(req: Request, res: Response): void;
declare function getActivityByCategory(req: Request, res: Response): void;
declare function getActivityBannerAll(req: Request, res: Response): void;
declare function getActivityBannerByCategory(req: Request, res: Response): void;
export { getActivityAll, getActivityById, getActivityByCategory, getActivityBannerAll, getActivityBannerByCategory };
