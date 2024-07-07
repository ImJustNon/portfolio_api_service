"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.default.config();
const config = {
    port: parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "8080"),
    baseUrl: (_b = process.env.BASEURL) !== null && _b !== void 0 ? _b : "",
    allowedOrigins: ["http://127.0.0.1:3000"]
};
exports.default = config;
//# sourceMappingURL=config.js.map