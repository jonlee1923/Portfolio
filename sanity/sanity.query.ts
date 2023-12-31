import {groq} from 'next-sanity';
import client from "./sanity.client";

export async function getProfile(){

    //* is for every document in the dataset
    // [] brackets is the filter
    // {} brackets define the content needed from the dataset
    return client.fetch(
        groq`*[_type == "profile"]{
            _id,
            fullName,
            shortBio,
            longBio,
            profileImage {alt, "image": asset->url},
            email,
            "resumeURL":resumeURL.asset -> url,
            socialLinks,
            skills
        }`
    )
}