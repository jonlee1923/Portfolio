import { MdOutlinePostAdd } from "react-icons/md";

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
        {
            name: "tags",
            title: "Tags",
            type: "array",
            description: "List of relevant tags related to this blog post",
            of: [{ type: "string" }],
        },
        {
            name: "summary",
            title: "Summary",
            type: "string",
            description: "In one sentence sumamrise this blog post",
        },
    ],
};

export default blogPost;
