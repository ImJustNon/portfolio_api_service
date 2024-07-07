"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("./config/config"));
const server = http_1.default.createServer(app_1.default);
const serverPort = config_1.default.port;
const serverBaseUrl = config_1.default.baseUrl;
app_1.default.set("port", serverPort);
app_1.default.set("baseurl", serverBaseUrl);
server.listen(serverPort);
server.on("listening", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`> RestAPI Service listening on port : ${config_1.default.port} : ${config_1.default.baseUrl}:${config_1.default.port}`);
}));
server.on("error", (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }
    let bind = typeof String(serverPort) === "string" ? "Pipe " + String(serverPort) : "Port " + String(serverPort);
    if (error.code === "EACCES") {
        console.error(bind + " requires elevated privileges");
        process.exit(1);
    }
    else if (error.code === "EADDRINUSE") {
        console.error(bind + " is already in use");
        process.exit(1);
    }
    else {
        throw error;
    }
});
//# sourceMappingURL=index.js.map