import dotenv from "dotenv";
dotenv.config();


const config = {
    port: parseInt(process.env.PORT ?? "8080"),
    baseUrl: process.env.BASEURL ?? "",
    allowedOrigins: process.env.CORS ? process.env.CORS.split(",") : [""],
}


export default config;