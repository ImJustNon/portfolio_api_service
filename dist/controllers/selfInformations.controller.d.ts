import { Request, Response } from "express";
declare function getSelfInformationAll(req: Request, res: Response): void;
declare function getSelfInformationByCategory(req: Request, res: Response): void;
declare function getSocialAll(req: Request, res: Response): void;
declare function getSocialById(req: Request, res: Response): void;
declare function getSocialByName(req: Request, res: Response): void;
export { getSelfInformationAll, getSelfInformationByCategory, getSocialAll, getSocialById, getSocialByName };
