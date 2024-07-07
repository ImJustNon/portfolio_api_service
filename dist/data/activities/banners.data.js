"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivityBanners = getActivityBanners;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getActivityBanners() {
    let activityBanners = {};
    const readActivityBannerJsonFile = fs_1.default.readFileSync(path_1.default.join(__dirname, "./json", "banners.json"), {
        encoding: "utf8",
    });
    const parseJsonData = JSON.parse(readActivityBannerJsonFile);
    activityBanners = Object.assign({}, parseJsonData);
    return activityBanners;
}
//# sourceMappingURL=banners.data.js.map