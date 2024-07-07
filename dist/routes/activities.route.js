"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const activities_controller_1 = require("../controllers/activities.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/v1/activities/all", activities_controller_1.getActivityAll);
router.get("/v1/activities/byid/:id", activities_controller_1.getActivityById);
router.get("/v1/activities/bycategory/:category", activities_controller_1.getActivityByCategory);
router.get("/v1/activities/banners/all", activities_controller_1.getActivityBannerAll);
router.get("/v1/activities/banners/bycategory/:category", activities_controller_1.getActivityBannerByCategory);
exports.default = router;
//# sourceMappingURL=activities.route.js.map