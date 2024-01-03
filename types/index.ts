import { PortableTextBlock } from "sanity";
type SocialLinks = {
    github: string;
    linkedin: string;
  };
  
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
    socialLinks: SocialLinks;
    frameworks: string[];
    languages: string[];
};

export type JobType = {
    _id: string;
    name: string;
    jobTitle: string;
    logo: string;
    description: PortableTextBlock[];
    startDate: Date;
    endDate: Date;
};

export type ProjectType = {
    _id: string;
    name: string;
    projectUrl: string;
    coverImage: {
        alt: string;
        image: string;
    };
    description: PortableTextBlock[];
};


export type BlogPostType = {
    _id: string;
    title: string;
    publishDate: Date;
    coverImage:{
        alt: string;
        image: string;
    };
    post: PortableTextBlock[];
    tags: string[];
    summary: string;
}
