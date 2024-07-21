"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelfInformationAll = getSelfInformationAll;
exports.getSelfInformationByCategory = getSelfInformationByCategory;
exports.getSocialAll = getSocialAll;
exports.getSocialById = getSocialById;
exports.getSocialByName = getSocialByName;
const selfInformations_data_1 = require("../data/informations/selfInformations.data");
const socials_data_1 = require("../data/informations/socials.data");
function getSelfInformationAll(req, res) {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: (0, selfInformations_data_1.getSelfInformations)(),
    });
    return;
}
function getSelfInformationByCategory(req, res) {
    var _a;
    const category = req.params.category;
    const allSelfInformations = (0, selfInformations_data_1.getSelfInformations)();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: (_a = allSelfInformations[category]) !== null && _a !== void 0 ? _a : [],
    });
    return;
}
function getSocialAll(req, res) {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: (0, socials_data_1.getSocials)(),
    });
    return;
}
function getSocialById(req, res) {
    const { id } = req.params;
    const allSocials = (0, socials_data_1.getSocials)();
    const allSocialsArray = Object.values(allSocials).flat();
    const filterSocialDataById = allSocialsArray.filter((social) => social.id === id);
    res.json({
        status: "OK",
        message: "This is Project data",
        data: filterSocialDataById !== null && filterSocialDataById !== void 0 ? filterSocialDataById : [],
    });
    return;
}
function getSocialByName(req, res) {
    const { name } = req.params;
    const allSocials = (0, socials_data_1.getSocials)();
    const allSocialsArray = Object.values(allSocials).flat();
    const filterSocialDataById = allSocialsArray.filter((social) => social.name.toLowerCase() === name.toLowerCase());
    res.json({
        status: "OK",
        message: "This is Project data",
        data: filterSocialDataById !== null && filterSocialDataById !== void 0 ? filterSocialDataById : [],
    });
    return;
}
//# sourceMappingURL=selfInformations.controller.js.map