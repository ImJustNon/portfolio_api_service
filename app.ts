import bodyParser from "body-parser";
import { NextFunction, NextHandleFunction } from "connect";
import express, { Application, Handler, Request, Response } from "express";
import cors from "cors";
import config from "./config/config";
import { CorsOriginCallbackFunction, CorsOriginParam } from "./types/corsOptions.type";
import morgan from "morgan";
import createHttpError from "http-errors";
import certificatesRouter from "./routes/certificates.route";
import activitiesRouter from "./routes/activities.route";
import projectsRouter from "./routes/projects.route";
import stacksRouter from "./routes/stacks.route";
import selfInformationsRouter from "./routes/selfInformations.route";

const app: Application = express();
const urlEncoded: NextHandleFunction = bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
});
const jsonEncoded: NextHandleFunction = express.json({
    limit: "50mb",
});
const corsOrigins: NextHandleFunction = cors({
    origin: function (origin: CorsOriginParam, callback: CorsOriginCallbackFunction) {
        if (!origin) return callback(null, true);
        if (config.allowedOrigins.indexOf(origin as never) === -1) {
            const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
});
const morganLog: NextHandleFunction = morgan("dev");



app.use(corsOrigins);
app.use(urlEncoded);
app.use(jsonEncoded);
app.use(morganLog);

app.use("/api", certificatesRouter);
app.use("/api", activitiesRouter);
app.use("/api", projectsRouter);
app.use("/api", stacksRouter);
app.use("/api", selfInformationsRouter);

// app.get("/root", (req: Request, res: Response) => {
//     res.json(config.allowedOrigins);
// });


export default app;