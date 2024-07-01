import app from "./app";
import http, { Server } from "http";
import config from "./config/config";

const server: Server = http.createServer(app);

const serverPort: number = config.port;
const serverBaseUrl: string = config.baseUrl;

app.set("port", serverPort);
app.set("baseurl", serverBaseUrl);

server.listen(serverPort);

server.on("listening", async() =>{
    console.log(`> RestAPI Service listening on port : ${config.port} : ${config.baseUrl}:${config.port}`);
});

server.on("error", (error: any) =>{
    if(error.syscall !== "listen"){
        throw error;
    }
    let bind = typeof String(serverPort) === "string" ? "Pipe " + String(serverPort) : "Port " + String(serverPort);
    if(error.code === "EACCES"){
        console.error(bind + " requires elevated privileges");
        process.exit(1);
    }
    else if(error.code === "EADDRINUSE"){
        console.error(bind + " is already in use");
        process.exit(1);
    }
    else{
        throw error;
    }
});