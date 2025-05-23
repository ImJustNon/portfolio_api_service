"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "8080"),
    baseUrl: (_b = process.env.BASEURL) !== null && _b !== void 0 ? _b : "",
    allowedOrigins: ["http://127.0.0.1:3000", "http://localhost:8088", "https://portfolio.imnon.xyz", "http://localhost:8081", "https://profile.imnon.xyz", "https://portfolio.nknk.site"]
};
exports.default = config;
//# sourceMappingURL=config.js.map