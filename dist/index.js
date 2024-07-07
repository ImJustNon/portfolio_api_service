"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http_1 = require("http");
const config_1 = require("./config/config");
const server = http_1.default.createServer(app_1.default);
const serverPort = config_1.default.port;
const serverBaseUrl = config_1.default.baseUrl;
app_1.default.set("port", serverPort);
app_1.default.set("baseurl", serverBaseUrl);
server.listen(serverPort);
server.on("listening", async () => {
    console.log(`> RestAPI Service listening on port : ${config_1.default.port} : ${config_1.default.baseUrl}:${config_1.default.port}`);
});
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