export type SelfInformationCategory = "me" | "dad" | "mom" | "schools";

export type SelfInformation = {
    title: string[];
    description: string[];
}

export type SchoolInformationLink = {
    name: string;
    url: string;
}
export type SchoolInformation = {
    id: string;
    img: string;
    url: string;
    title: string[];
    description: string[];
    links: SchoolInformationLink[];
}

export interface SelfInformations {
    me?: SelfInformation;
    dad?: SelfInformation;
    mom?: SelfInformation;
    schools?: SchoolInformation;
}

export type Social = {
    id: string;
    name: string;
    url: string;
}

export type Socials = Social[];