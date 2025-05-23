import dotenv from "dotenv";
dotenv.config();


const config = {
    port: parseInt(process.env.PORT ?? "8080"),
    baseUrl: process.env.BASEURL ?? "",
    allowedOrigins: ["http://127.0.0.1:3000", "http://localhost:8088", "https://portfolio.imnon.xyz", "http://localhost:8081", "https://profile.imnon.xyz", "https://portfolio.nknk.site"]
}


export default config;