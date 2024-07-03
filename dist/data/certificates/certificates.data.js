"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCertificates = getCertificates;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function getCertificates() {
    let certificates = {};
    const scanForCertificateJsonFile = fs_1.default.readdirSync(path_1.default.join(__dirname, "./json")).filter(filename => filename.endsWith(".json"));
    for (const filename of scanForCertificateJsonFile) {
        const fileData = fs_1.default.readFileSync(path_1.default.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData = JSON.parse(fileData);
        certificates = Object.assign(Object.assign({}, parseJsonData), certificates);
    }
    return certificates;
}
