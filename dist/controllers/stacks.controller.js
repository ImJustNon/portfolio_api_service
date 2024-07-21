"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStackAll = getStackAll;
exports.getStackById = getStackById;
exports.getStackByCategory = getStackByCategory;
const stacks_data_1 = require("../data/tools/stacks.data");
function getStackAll(req, res) {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: (0, stacks_data_1.getStacks)(),
    });
    return;
}
function getStackById(req, res) {
    var _a;
    const { id } = req.params;
    const allStacks = (0, stacks_data_1.getStacks)();
    const allStacksArray = Object.values(allStacks).flat();
    const filterStackDataById = allStacksArray.filter((stack) => stack.id === id);
    res.json({
        status: "OK",
        message: "This is Project data",
        data: (_a = filterStackDataById[0]) !== null && _a !== void 0 ? _a : [],
    });
    return;
}
function getStackByCategory(req, res) {
    var _a;
    const category = req.params.category;
    const allStacks = (0, stacks_data_1.getStacks)();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: (_a = allStacks[category]) !== null && _a !== void 0 ? _a : [],
    });
    return;
}
//# sourceMappingURL=stacks.controller.js.map