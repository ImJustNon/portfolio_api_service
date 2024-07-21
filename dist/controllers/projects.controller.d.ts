import { Request, Response } from "express";
declare function getProjectAll(req: Request, res: Response): void;
declare function getProjectById(req: Request, res: Response): void;
declare function getProjectByCategory(req: Request, res: Response): void;
export { getProjectAll, getProjectById, getProjectByCategory, };
