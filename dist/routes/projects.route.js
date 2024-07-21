"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const projects_controller_1 = require("../controllers/projects.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/v1/projects/all", projects_controller_1.getProjectAll);
router.get("/v1/projects/byid/:id", projects_controller_1.getProjectById);
router.get("/v1/projects/bycategory/:category", projects_controller_1.getProjectByCategory);
exports.default = router;
//# sourceMappingURL=projects.route.js.map