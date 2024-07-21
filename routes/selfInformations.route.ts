import { getSelfInformationAll, getSelfInformationByCategory, getSocialAll, getSocialById, getSocialByName } from "../controllers/selfInformations.controller";
import { getProjectAll, getProjectByCategory, getProjectById } from "../controllers/projects.controller";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/v1/selfinformations/all", getSelfInformationAll);
router.get("/v1/selfinformations/bycategory/:category", getSelfInformationByCategory);

router.get("/v1/socials/all", getSocialAll);
router.get("/v1/socials/byid/:id", getSocialById);
router.get("/v1/socials/byname/:name", getSocialByName);
export default router;