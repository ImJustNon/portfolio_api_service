"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectAll = getProjectAll;
exports.getProjectById = getProjectById;
exports.getProjectByCategory = getProjectByCategory;
const projects_data_1 = require("../data/projects/projects.data");
function getProjectAll(req, res) {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: (0, projects_data_1.getProjects)(),
    });
    return;
}
function getProjectById(req, res) {
    const { id } = req.params;
    const allProjects = (0, projects_data_1.getProjects)();
    const allProjectsArray = Object.values(allProjects).flat();
    const filterProjectDataById = allProjectsArray.filter((proj) => proj.id === id);
    res.json({
        status: "OK",
        message: "This is Project data",
        data: filterProjectDataById !== null && filterProjectDataById !== void 0 ? filterProjectDataById : [],
    });
    return;
}
function getProjectByCategory(req, res) {
    var _a;
    const category = req.params.category;
    const allProjects = (0, projects_data_1.getProjects)();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: (_a = allProjects[category]) !== null && _a !== void 0 ? _a : [],
    });
    return;
}
//# sourceMappingURL=projects.controller.js.map