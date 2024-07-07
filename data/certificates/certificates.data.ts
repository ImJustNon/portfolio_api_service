import { Certificate, Certificates } from "../../types/certificates.type";
import fs from "fs";
import path from "path";

export function getCertificates(){
    let certificates: Certificates = {};
    const scanForCertificateJsonFile: string[] = fs.readdirSync(path.join(__dirname, "./json")).filter(filename => filename.endsWith(".json"));
    for(const filename of scanForCertificateJsonFile){
        const fileData: string = fs.readFileSync(path.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData: Certificate = JSON.parse(fileData);
        certificates = {
            ...parseJsonData,
            ...certificates
        }
    }

    console.log(certificates);

    return certificates;
}