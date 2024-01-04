import Image from "next/image";
import { Metadata } from "next";
import { getSinglePost } from "@/sanity/sanity.query";
import type { BlogPostType } from "@/types";
import { PortableText } from "@portabletext/react";
import BlogFooter from "@/components/blog/BlogFooter";

type Props = {
    params: {
        blog: string;
    };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = params.blog;
    const post: BlogPostType = await getSinglePost(slug);

    return {
        title: `${post.title} | post`,
        description: post.summary,
        openGraph: {
            // images: post.coverImage?.image,
            title: post.title,
            description: post.post.toString(),
        },
    };
}

export default async function Project({ params }: Props) {
    const slug = params.blog;
    const post: BlogPostType = await getSinglePost(slug);
    return (
        <main>
            <section className=" mx-auto px-8 bg-slate-900 text-white">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-start justify-between">
                        <h1 className="font-bold text-3xl lg:leading-tight mt-8 mb-4">
                            {post.title}
                        </h1>
                    </div>
                    <p className="text-xs mb-4">
                        Published {post.publishDate.toString()}
                    </p>

                    <Image
                        className="rounded-xl border border-zinc-800"
                        width={900}
                        height={460}
                        src={post.coverImage.image}
                        alt={post.coverImage?.alt || post.title}
                    />

                    <div className="flex flex-col gap-y-6 mt-8 leading-7">
                        <PortableText value={post.post} />
                    </div>
                    <ul className="flex items-start flex-wrap items-center gap-3 py-6">
                        {post.tags.map((tag, id) => (
                            <li
                                key={id}
                                className="text-sm text-white bg-slate-700 rounded-md px-2 py-1"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <BlogFooter />
        </main>
    );
}
