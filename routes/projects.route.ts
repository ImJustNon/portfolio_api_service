import { getProjectAll, getProjectByCategory, getProjectById } from "../controllers/projects.controller";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/v1/projects/all", getProjectAll);
router.get("/v1/projects/byid/:id", getProjectById);
router.get("/v1/projects/bycategory/:category", getProjectByCategory);
export default router;