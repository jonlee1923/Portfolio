import React from "react";
import Image from "next/image";
import { MdOutlineArticle } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

interface PostDetails {
    title: string;
    date: Date;
    summary: string;
    tags: string[];
}

const BlogPostCard = (postDetails: PostDetails) => {
    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="flex justify-between items-center text-gray-500">
                <span className="inline-flex items-center gap-x-1 py-0.5 rounded">
                    <MdOutlineArticle className="text-xl" />
                    Article
                </span>
                <p>Published {postDetails.date.toString()}</p>
            </div>
            <div>
                <ul className="flex items-start flex-wrap items-center gap-3 py-2">
                    {postDetails.tags.map((tag, id) => (
                        <li
                            key={id}
                            className="text-sm bg-slate-200 rounded-md px-2 py-1"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
            <h2 className="mt-6 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{postDetails.title}</a>
            </h2>
            <p className=" font-light text-gray-500 dark:text-gray-400">
                {postDetails.summary}
            </p>
            <div className="flex justify-between items-center">
                <a
                    href="#"
                    className="inline-flex items-center font-medium hover:underline gap-x-1"
                >
                    Read more
                    <FaArrowRight />
                </a>
            </div>
        </article>
    );
};

export default BlogPostCard;
