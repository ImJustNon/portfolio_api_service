"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivities = getActivities;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getActivities() {
    let activities = {};
    const scanForActivityJsonFile = fs_1.default.readdirSync(path_1.default.join(__dirname, "./json")).filter(filename => filename.endsWith(".json") && filename !== "banners.json");
    for (const filename of scanForActivityJsonFile) {
        const fileData = fs_1.default.readFileSync(path_1.default.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData = JSON.parse(fileData);
        activities = Object.assign(Object.assign({}, parseJsonData), activities);
    }
    return activities;
}
//# sourceMappingURL=activities.data.js.map