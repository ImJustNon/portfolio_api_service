import { getProjects } from "../data/projects/projects.data";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Project, ProjectCategory, Projects } from "types/projects.type";

function getProjectAll(req: Request, res: Response): void {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: getProjects(),
    });
    return;
}

function getProjectById(req: Request, res: Response): void {
    const { id } = req.params;

    const allProjects: Projects = getProjects();
    const allProjectsArray: Project[] = Object.values(allProjects).flat();

    const filterProjectDataById: Project[] = allProjectsArray.filter((proj: Project) => proj.id === id);

    res.json({
        status: "OK",
        message: "This is Project data",
        data: filterProjectDataById ?? [],
    });
    return;
}

function getProjectByCategory(req: Request, res: Response): void {
    const category: ProjectCategory = req.params.category as ProjectCategory;

    const allProjects: Projects = getProjects();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: allProjects[category] ?? [],
    });
    return;
}

export {
    getProjectAll,
    getProjectById,
    getProjectByCategory,
}