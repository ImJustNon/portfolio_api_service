"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivities = getActivities;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getActivities() {
    let activityBanners = {};
    const scanForActivityBannerJsonFile = fs_1.default.readdirSync(path_1.default.join(__dirname, "./json")).filter(filename => filename.endsWith(".json"));
    for (const filename of scanForActivityBannerJsonFile) {
        const fileData = fs_1.default.readFileSync(path_1.default.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData = JSON.parse(fileData);
        activityBanners = Object.assign(Object.assign({}, parseJsonData), activityBanners);
    }
    return activityBanners;
}
//# sourceMappingURL=banners.data.js.map