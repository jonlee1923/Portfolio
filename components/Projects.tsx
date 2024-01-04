import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";

export default async function Project() {
    const projects: ProjectType[] = await getProject();
    return (
        <section className="mt-32">
            <div className="flex justify-center mb-16">
                <h2 className="font-semibold text-4xl mb-4">Projects</h2>
            </div>
            <section className="flex justify-center gap-5 pb-12">
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
                ))}
            </section>
        </section>
    );
}
