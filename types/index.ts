import { PortableTextBlock } from "sanity";

export type ProfileType = {
    _id: string;
    fullName: string;
    shortBio: string;
    longBio: PortableTextBlock[];
    profileImage: {
        alt: string;
        image: string;
    };
    email: string;
    resumeURL: string;
    socialLinks: string[];
    skills: string[];
};

export type JobType = {
    _id: string;
    name: string;
    jobTitle: string;
    logo: string;
    description: string;
    startDate: Date;
    endDate: Date;
};
