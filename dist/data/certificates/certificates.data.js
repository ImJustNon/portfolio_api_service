"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCertificates = getCertificates;
const fs_1 = require("fs");
const path_1 = require("path");
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
    console.log(certificates);
    return certificates;
}
//# sourceMappingURL=certificates.data.js.map