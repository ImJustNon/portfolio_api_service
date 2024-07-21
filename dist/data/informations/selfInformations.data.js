"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelfInformations = getSelfInformations;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getSelfInformations() {
    let selfInformations = {};
    const scanForSelfInformationJsonFile = fs_1.default.readdirSync(path_1.default.join(__dirname, "./json")).filter(filename => filename.endsWith(".json") && filename !== "school.json" && filename !== "social.json");
    for (const filename of scanForSelfInformationJsonFile) {
        const fileData = fs_1.default.readFileSync(path_1.default.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData = JSON.parse(fileData);
        selfInformations = Object.assign(Object.assign({}, parseJsonData), selfInformations);
    }
    const scanForSchoolInformationJsonFile = fs_1.default.readdirSync(path_1.default.join(__dirname, "./json")).filter(filename => filename.endsWith(".json") && filename === "school.json");
    for (const filename of scanForSchoolInformationJsonFile) {
        const fileData = fs_1.default.readFileSync(path_1.default.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData = JSON.parse(fileData);
        selfInformations = Object.assign(Object.assign({}, parseJsonData), selfInformations);
    }
    return selfInformations;
}
//# sourceMappingURL=selfInformations.data.js.map