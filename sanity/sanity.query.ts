import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
    //* is for every document in the dataset
    // [] brackets is the filter
    // {} brackets define the content needed from the dataset

    //WARNING: the syntax for the groq query is very strict. Got a error with this when there was no space between : and resumeURL
    return client.fetch(
        groq`*[_type == "profile"]{
            _id,
            fullName,
            shortBio,
            longBio,
            profileImage {alt, "image": asset->url},
            email,
            "resumeURL": resumeURL.asset -> url,
            socialLinks,
            frameworks,
            languages
        }`
    );
}

export async function getJob() {
    return client.fetch(
        groq`*[_type == "job"]{
            _id,
            name,
            jobTitle,
            "logo": logo.asset->url,
            description,
            startDate,
            endDate
        }`
    );
}

export async function getProject() {
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            name,
            "coverImage": coverImage.asset->url,
            description,
            projectUrl
        }`
    );
}

export async function getPosts() {
    return client.fetch(
        groq`*[_type=="blogpost"]{
            _id,
            title,
            publishDate,
            coverImage {alt, "image": asset->url},
            summary,
            "slug": slug.current,
            post,
            tags,
        }`
    );
}

export async function getSinglePost(slug: string) {
    return client.fetch(
        groq`*[_type == "blogpost" && slug.current == $slug][0]{
            _id,
            title,
            publishDate,
            coverImage {alt, "image": asset->url},
            summary,
            post,
            tags
      }`,
        { slug }
    );
}
