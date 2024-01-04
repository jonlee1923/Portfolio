import { MdOutlinePostAdd } from "react-icons/md";
import { defineField } from "sanity";

const blogPost = {
    name: "blogpost",
    title: "Blog post",
    type: "document",
    icon: MdOutlinePostAdd,
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "What is the title of this blog post?",
        },
        {
            name: "publishDate",
            title: "Published date",
            type: "date",
        },
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
        },
        {
            name: "post",
            title: "Post",
            type: "array",
            description: "Write your post",
            of: [{ type: "block" }],
        },
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            description:
                "Add a custom slug for the URL or generate one from the name",
            options: { source: "name" },
            validation: (rule) => rule.required(),
        }),
        {
            name: "summary",
            title: "Summary",
            type: "string",
            description: "In one sentence sumamrise this blog post",
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            description: "List of relevant tags related to this blog post",
            of: [{ type: "string" }],
        },
    ],
};

export default blogPost;
