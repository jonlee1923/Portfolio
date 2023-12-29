import { defineField } from "sanity";
import { BiUser } from "react-icons/bi"

// name key is referenced by groq
// title is used in studio UI

const profile = {
    name: "profile",
    title: "Profile",
    type: "document",
    icon: BiUser,
    fields: [
        defineField({
            name: "fullName",
            title: "Full Name",
            type: "string",
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "bio",
            title: "Bio",
            type: "string",
            description: "In one sentence, what do you do?",
            validation: (Rule) => Rule.required().min(40).max(80),
        }),

        {
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            description: "Upload your profile picture",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "email",
            title: "Email Address",
            type: "string",
        },
        {
            name: "resumeURL",
            title: "Upload Resume",
            type: "file"
        },
        {
            name: "socialLinks",
            title: "Social Links",
            type: "object",
            description: "Add your social media links",
            fields: [
                {
                    name: "github",
                    title: "Github URL",
                    type: "url",
                    initialValue: "https://github.com/",
                },
                {
                    name: "linkedin",
                    title: "Linkedin URL",
                    type: "url",
                    initialValue: "https://linkedin.com/in/",
                }
            ],
            options: {
                collapsed: false,
                collapsible: true,
                columns: 2,
            }
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            description: "Add a list of skills",
            of: [{ type: "string" }],
        }

    ],
};

export default profile;