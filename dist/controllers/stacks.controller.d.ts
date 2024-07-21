import { Request, Response } from "express";
declare function getStackAll(req: Request, res: Response): void;
declare function getStackById(req: Request, res: Response): void;
declare function getStackByCategory(req: Request, res: Response): void;
export { getStackAll, getStackById, getStackByCategory };
