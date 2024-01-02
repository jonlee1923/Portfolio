import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const project = {
    name: "project",
    title: "Project",
    description: "Project schema",
    type: "document",
    icon: BiPackage,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "Enter the name of the project",
        },

        {
            name: "description",
            title: "Description",
            type: "array",
            description: "Write a full description of the project",
            of: [{ type: "block" }],
        },
        {
            name: "projectUrl",
            title: "Project URL",
            type: "url",
        },
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            description: "Upload a cover image for this project",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
    ],
};

export default project;
