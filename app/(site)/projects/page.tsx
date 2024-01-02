import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";

export default async function Project() {
    const projects: ProjectType[] = await getProject();
    return (
        <main className="max-w-7xl mx-auto md:px-16 px-6">
            <section className="max-w-2xl mb-16">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
                    Featured projects I&apos;ve built
                </h1>
            </section>

            <section className="grid grid-cols-1 gap-5 mb-12">
                {projects.map((project) => (
                    <div key={project._id}>
                        <Image
                            src={project.coverImage.image}
                            width={60}
                            height={60}
                            alt={project.coverImage.alt}
                            className="bg-zinc-800 rounded-md p-2"
                        />
                        <div>
                            <h2 className="font-semibold mb-1">
                                {project.name}
                            </h2>
                        </div>
                        <PortableText value={project.description} />
                    </div>
                    // </Link>
                ))}
            </section>
        </main>
    );
}
