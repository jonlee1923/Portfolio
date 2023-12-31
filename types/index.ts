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
