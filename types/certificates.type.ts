export type CertificateCategory = "vocational_certificate_3rd_year" | "vocational_certificate_2nd_year" | "vocational_certificate_1st_year" | "middle_school" | "upper_elementary_school";
export type Certificate = {
    id: string;
    img: string;
    url: string;
    title: string[];
    description: string[];
}
export interface Certificates {
    vocational_certificate_3rd_year?: Certificate[];
    vocational_certificate_2nd_year?: Certificate[];
    vocational_certificate_1st_year?: Certificate[];
    middle_school?: Certificate[];
    upper_elementary_school?: Certificate[];
}