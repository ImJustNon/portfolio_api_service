import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { getSelfInformations } from "../data/informations/selfInformations.data";
import { SelfInformationCategory, SelfInformations, Social, Socials } from "types/informations.type";
import { getSocials } from "../data/informations/socials.data";

function getSelfInformationAll(req: Request, res: Response): void {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: getSelfInformations(),
    });
    return;
}

function getSelfInformationByCategory(req: Request, res: Response): void {
    const category: SelfInformationCategory = req.params.category as SelfInformationCategory;

    const allSelfInformations: SelfInformations = getSelfInformations();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: allSelfInformations[category] ?? [],
    });
    return;
}

function getSocialAll(req: Request, res: Response): void {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: getSocials(),
    });
    return;
}

function getSocialById(req: Request, res: Response): void {
    const { id } = req.params;
    const allSocials: Socials = getSocials();
    const allSocialsArray: Socials = Object.values(allSocials).flat();
    const filterSocialDataById: Socials = allSocialsArray.filter((social: Social) => social.id === id);
    res.json({
        status: "OK",
        message: "This is Project data",
        data: filterSocialDataById[0] ?? [],
    });
    return;
}

function getSocialByName(req: Request, res: Response): void {
    const { name } = req.params;
    const allSocials: Socials = getSocials();
    const allSocialsArray: Socials = Object.values(allSocials).flat();
    const filterSocialDataById: Socials = allSocialsArray.filter((social: Social) => social.name.toLowerCase() === name.toLowerCase());
    res.json({
        status: "OK",
        message: "This is Project data",
        data: filterSocialDataById[0] ?? [],
    });
    return;
}

export {
    getSelfInformationAll,
    getSelfInformationByCategory,
    getSocialAll,
    getSocialById,
    getSocialByName
}