import { getStacks } from "../data/tools/stacks.data";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Stack, StackCategory, Stacks } from "../types/stacks.type";

function getStackAll(req: Request, res: Response): void {
    res.json({
        status: "OK",
        message: "This is activities data",
        data: getStacks(),
    });
    return;
}

function getStackById(req: Request, res: Response): void {
    const { id } = req.params;

    const allStacks: Stacks = getStacks();
    const allStacksArray: Stack[] = Object.values(allStacks).flat();

    const filterStackDataById: Stack[] = allStacksArray.filter((stack: Stack) => stack.id === id);

    res.json({
        status: "OK",
        message: "This is Project data",
        data: filterStackDataById[0] ?? [],
    });
    return;
}

function getStackByCategory(req: Request, res: Response): void {
    const category: StackCategory = req.params.category as StackCategory;

    const allStacks: Stacks = getStacks();
    res.json({
        status: "OK",
        message: "This is certificate data",
        data: allStacks[category] ?? [],
    });
    return;
}

export {
    getStackAll,
    getStackById,
    getStackByCategory
}