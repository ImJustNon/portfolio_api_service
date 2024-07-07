export type ActivityCategory = "vocational_certificate_1st_year" | "vocational_certificate_2nd_year" | "vocational_certificate_3rd_year";
export type ActivityBannerCategory = "v1" | "v2";
export type ActivityDetails = {
    photos: string[];
    description: string[];
};
export type Activity = {
    id: string;
    img: string;
    url: string;
    title: string[];
    description: string[];
    details: ActivityDetails;
};
export interface Activities {
    vocational_certificate_1st_year?: Activity[];
    vocational_certificate_2nd_year?: Activity[];
    vocational_certificate_3rd_year?: Activity[];
}
export type ActivityBannerV2 = {
    img: string;
};
export type ActivityBannerV1 = {
    img: string;
    title: string;
    description: string;
    active: boolean;
    position: string;
};
export interface ActivityBanners {
    v2?: ActivityBannerV2[];
    v1?: ActivityBannerV1[];
}
