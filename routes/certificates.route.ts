import express, { Router } from "express";
import { getCertificateAll, getCertificateByCategory, getCertificateById } from "../controllers/certificates.controller";

const router: Router = express.Router();

router.get("/v1/certificates/all", getCertificateAll);
router.get("/v1/certificates/byid/:id", getCertificateById);
router.get("/v1/certificates/bycategory/:category", getCertificateByCategory);

export default router;