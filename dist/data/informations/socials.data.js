"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSocials = getSocials;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getSocials() {
    var _a;
    let socials = [];
    const scanForSocialJsonFile = fs_1.default.readdirSync(path_1.default.join(__dirname, "./json")).filter(filename => filename.endsWith(".json") && filename === "social.json");
    for (const filename of scanForSocialJsonFile) {
        const fileData = fs_1.default.readFileSync(path_1.default.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData = (_a = JSON.parse(fileData).socials) !== null && _a !== void 0 ? _a : [];
        socials.push(...parseJsonData);
    }
    return socials;
}
//# sourceMappingURL=socials.data.js.map