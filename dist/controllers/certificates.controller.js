"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCertificateAll = getCertificateAll;
exports.getCertificateById = getCertificateById;
exports.getCertificateByCategory = getCertificateByCategory;
const certificates_data_1 = require("../data/certificates/certificates.data");
function getCertificateAll(req, res) {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: (0, certificates_data_1.getCertificates)()
    });
    return;
}
function getCertificateById(req, res) {
    var _a;
    const { id } = req.params;
    const allCertificates = (0, certificates_data_1.getCertificates)();
    const allCertificatesArray = Object.values(allCertificates).flat();
    const filterCertificateDataById = allCertificatesArray.filter((cert) => cert.id === id);
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: (_a = filterCertificateDataById[0]) !== null && _a !== void 0 ? _a : [],
    });
    return;
}
function getCertificateByCategory(req, res) {
    var _a;
    const category = req.params.category;
    const allCertificates = (0, certificates_data_1.getCertificates)();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: (_a = allCertificates[category]) !== null && _a !== void 0 ? _a : [],
    });
    return;
}
