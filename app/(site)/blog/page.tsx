import BlogFooter from "@/components/blog/BlogFooter";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { getPosts } from "@/sanity/sanity.query";
import { BlogPostType } from "@/types";
import React from "react";

export default async function Blog() {
    const posts: BlogPostType[] = await getPosts();
    console.log(posts);
    return (
        <main >
            <section className="flex-col px-6 min-h-screen bg-slate-900">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8 pt-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">
                        Jon&apos;s Engineering Blog
                    </h2>
                    <p className="font-light text-white sm:text-xl dark:text-gray-400">
                        Sharing what I&apos;ve learnt from past experiences from
                        internships and personal side projects!
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="flex-col w-2/3 gap-x-8">
                        {posts.map((post) => (
                            <BlogPostCard
                                key={post._id}
                                title={post.title}
                                date={post.publishDate}
                                summary={post.summary}
                                tags={post.tags}
                                // slug={post.slug}
                                slug="lessons-learnt-at-gic"
                            />
                        ))}
                    </div>
                </div>
            </section>
            <BlogFooter/>
        </main>
    );
}
