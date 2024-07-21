export type StackCategory = "frameworks" | "languages";

export type Stack = {
    id: string;
    name: string;
    img: string;
    url: string;
}

export interface Stacks {
    frameworks?: Stack;
    languages?: Stack;
}