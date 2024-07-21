
import { getStackAll, getStackByCategory, getStackById } from "../controllers/stacks.controller";
import express, { Router } from "express";

const router: Router = express.Router();

router.get("/v1/stacks/all", getStackAll);
router.get("/v1/stacks/byid/:id", getStackById);
router.get("/v1/stacks/bycategory/:category", getStackByCategory);
export default router;