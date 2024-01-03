import React from "react";
import Image from "next/image";
import { MdOutlineArticle } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

interface PostDetails {
    title: string;
    date: Date;
    summary: string;
}

const BlogPostCard = (postDetails: PostDetails) => {
    return (
        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="text-xs font-medium inline-flex items-center gap-x-1 py-0.5 rounded">
                    <MdOutlineArticle />
                    Article
                </span>
                {/* <span className="text-sm">14 days ago</span> */}
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{postDetails.title}</a>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                {postDetails.summary}
            </p>
            <div className="flex justify-between items-center">
                <a
                    href="#"
                    className="inline-flex items-center font-medium hover:underline gap-x-1"
                >
                    Read more
                    <FaArrowRight/>
                </a>
            </div>
        </article>
    );
};

export default BlogPostCard;
