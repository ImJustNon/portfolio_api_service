import fs from "fs";
import path from "path";
import { Project, Projects } from "types/projects.type";

export function getProjects(){
    let projects: Projects = {};
    const scanForProjectJsonFile: string[] = fs.readdirSync(path.join(__dirname, "./json")).filter(filename => filename.endsWith(".json"));
    for(const filename of scanForProjectJsonFile){
        const fileData: string = fs.readFileSync(path.join(__dirname, "./json", filename), {
            encoding: "utf8",
        });
        const parseJsonData: Project = JSON.parse(fileData);
        projects = {
            ...parseJsonData,
            ...projects
        }
    }

    return projects;
}