import { getActivityAll, getActivityBannerAll, getActivityBannerByCategory, getActivityByCategory, getActivityById } from "../controllers/activities.controller";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/v1/activities/all", getActivityAll);
router.get("/v1/activities/byid/:id", getActivityById);
router.get("/v1/activities/bycategory/:category", getActivityByCategory);

router.get("/v1/activities/banners/all", getActivityBannerAll);
router.get("/v1/activities/banners/bycategory/:category", getActivityBannerByCategory);

export default router;