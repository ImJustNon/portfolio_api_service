"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selfInformations_controller_1 = require("../controllers/selfInformations.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/v1/selfinformations/all", selfInformations_controller_1.getSelfInformationAll);
router.get("/v1/selfinformations/bycategory/:category", selfInformations_controller_1.getSelfInformationByCategory);
router.get("/v1/socials/all", selfInformations_controller_1.getSocialAll);
router.get("/v1/socials/byid/:id", selfInformations_controller_1.getSocialById);
router.get("/v1/socials/byname/:name", selfInformations_controller_1.getSocialByName);
exports.default = router;
//# sourceMappingURL=selfInformations.route.js.map