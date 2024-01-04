import Image from "next/image";
import { Metadata } from "next";
import { getSinglePost } from "@/sanity/sanity.query";
import type { BlogPostType } from "@/types";
import { PortableText } from "@portabletext/react";

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
    console.log("checking" + params);
    const slug = params.blog;
    const post: BlogPostType = await getSinglePost(slug);
    console.log(post.coverImage);
    return (
        <main className="max-w-6xl mx-auto lg:px-16 px-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-start justify-between mb-4">
                    <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
                        {post.title}
                    </h1>

                    {/* <a
            href={post.projectUrl}
            rel="noreferrer noopener"
            className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2"
          >
            Explore
          </a> */}
                </div>

                <Image
                    className="rounded-xl border border-zinc-800"
                    width={900}
                    height={460}
                    src={post.coverImage.image}
                    alt={post.coverImage?.alt || post.title}
                />

                <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
                    <PortableText value={post.post} />
                </div>
            </div>
        </main>
    );
}
