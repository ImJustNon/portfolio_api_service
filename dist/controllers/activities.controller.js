"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivityAll = getActivityAll;
exports.getActivityById = getActivityById;
exports.getActivityByCategory = getActivityByCategory;
exports.getActivityBannerAll = getActivityBannerAll;
exports.getActivityBannerByCategory = getActivityBannerByCategory;
const banners_data_1 = require("../data/activities/banners.data");
const activities_data_1 = require("../data/activities/activities.data");
function getActivityAll(req, res) {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: (0, activities_data_1.getActivities)()
    });
    return;
}
function getActivityById(req, res) {
    const { id } = req.params;
    const allActivities = (0, activities_data_1.getActivities)();
    const allActivitiesArray = Object.values(allActivities).flat();
    const filterActivityDataById = allActivitiesArray.filter((cert) => cert.id === id);
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: filterActivityDataById !== null && filterActivityDataById !== void 0 ? filterActivityDataById : [],
    });
    return;
}
function getActivityByCategory(req, res) {
    var _a;
    const category = req.params.category;
    const allActivities = (0, activities_data_1.getActivities)();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: (_a = allActivities[category]) !== null && _a !== void 0 ? _a : [],
    });
    return;
}
function getActivityBannerAll(req, res) {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: (0, banners_data_1.getActivityBanners)()
    });
    return;
}
function getActivityBannerByCategory(req, res) {
    var _a;
    const category = req.params.category;
    const allActivityBanners = (0, banners_data_1.getActivityBanners)();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: (_a = allActivityBanners[category]) !== null && _a !== void 0 ? _a : [],
    });
    return;
}
//# sourceMappingURL=activities.controller.js.map