import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Certificate, CertificateCategory, Certificates } from "../types/certificates.type";
import { getCertificates } from "../data/certificates/certificates.data";

function getCertificateAll(req: Request, res: Response): void {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: getCertificates()
    });
    return;
}

function getCertificateById(req: Request, res: Response): void {
    const { id } = req.params;

    const allCertificates: Certificates = getCertificates();
    const allCertificatesArray: Certificate[] = Object.values(allCertificates).flat();

    const filterCertificateDataById: Certificate[] = allCertificatesArray.filter((cert: Certificate) => cert.id === id);

    res.json({
        status: "OK",
        message: "This is certificate data",
        data: filterCertificateDataById ?? [],
    });
    return;
}

function getCertificateByCategory(req: Request, res: Response): void {
    const category: CertificateCategory = req.params.category as CertificateCategory;

    const allCertificates: Certificates = getCertificates();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: allCertificates[category] ?? [],
    });
    return;
}


export {
    getCertificateAll,
    getCertificateById,
    getCertificateByCategory
}