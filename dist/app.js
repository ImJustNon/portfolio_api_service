"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config/config"));
const morgan_1 = __importDefault(require("morgan"));
const certificates_route_1 = __importDefault(require("./routes/certificates.route"));
const activities_route_1 = __importDefault(require("./routes/activities.route"));
const projects_route_1 = __importDefault(require("./routes/projects.route"));
const app = (0, express_1.default)();
const urlEncoded = body_parser_1.default.urlencoded({
    limit: "50mb",
    extended: false,
});
const jsonEncoded = express_1.default.json({
    limit: "50mb",
});
const corsOrigins = (0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (config_1.default.allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
});
const morganLog = (0, morgan_1.default)("dev");
app.use(corsOrigins);
app.use(urlEncoded);
app.use(jsonEncoded);
app.use(morganLog);
app.use("/api", certificates_route_1.default);
app.use("/api", activities_route_1.default);
app.use("/api", projects_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map