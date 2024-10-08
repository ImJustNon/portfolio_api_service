"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const certificates_controller_1 = require("../controllers/certificates.controller");
const router = express_1.default.Router();
router.get("/v1/certificates/all", certificates_controller_1.getCertificateAll);
router.get("/v1/certificates/byid/:id", certificates_controller_1.getCertificateById);
router.get("/v1/certificates/bycategory/:category", certificates_controller_1.getCertificateByCategory);
exports.default = router;
//# sourceMappingURL=certificates.route.js.map