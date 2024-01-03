import BlogPostCard from "@/components/blog/BlogPostCard";
import { getPosts } from "@/sanity/sanity.query";
import { BlogPostType } from "@/types";
import React from "react";

export default async function Blog() {
    const posts: BlogPostType[] = await getPosts();

    return (
        <main className="max-w-7xl mx-auto lg:px-16 px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 pt-8">
                <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Jon&apos;s Engineering Blog
                </h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    Sharing what I&aposve learnt from past experiences from internships and personal side projects!
                </p>
            </div>
            <div>
                {posts.map((post) => (
                    <BlogPostCard
                        key={post._id}
                        title={post.title}
                        date={post.publishDate}
                        summary={post.summary}
                    />
                ))}
            </div>
        </main>
    );
}
