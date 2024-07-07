export type ProjectCategory = "m_3" | "vocational_certificate_1st_year" | "vocational_certificate_2nd_year" | "vocational_certificate_3rd_year";
export type ProjectLink = {
    name: string;
    url: string;
};
export type Project = {
    id: string;
    img: string;
    url: string;
    title: string[];
    description: string[];
    links: ProjectLink[];
};
export interface Projects {
    m_3?: Project;
    vocational_certificate_1st_year?: Project;
    vocational_certificate_2nd_year?: Project;
    vocational_certificate_3rd_year?: Project;
}
