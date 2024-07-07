import { Request, Response } from "express";
declare function getCertificateAll(req: Request, res: Response): void;
declare function getCertificateById(req: Request, res: Response): void;
declare function getCertificateByCategory(req: Request, res: Response): void;
export { getCertificateAll, getCertificateById, getCertificateByCategory };
