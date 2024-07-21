"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStacks = getStacks;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getStacks() {
    let stacks = {};
    const scanForStackJsonFile = fs_1.default.readdirSync(path_1.default.join(__dirname, "./json")).filter(filename => filename.endsWith(".json"));
    for (const filename of scanForStackJsonFile) {
        const fileData = fs_1.default.readFileSync(path_1.default.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData = JSON.parse(fileData);
        stacks = Object.assign(Object.assign({}, parseJsonData), stacks);
    }
    return stacks;
}
//# sourceMappingURL=stacks.data.js.map