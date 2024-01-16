import Image from "next/image";
import { getProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";

export default async function Project() {
    const projects: ProjectType[] = await getProject();
    return (
        <section className="mt-32 mx-auto max-w-5xl">
            {projects && (
                <div>
                    <section className="flex-col justify-center gap-5 pb-12">
                        <div className="flex justify-center mb-16">
                            <h2 className="font-semibold text-4xl mb-4">
                                Projects
                            </h2>
                        </div>
                        {projects.map((project) => (
                            <div key={project._id} className="sm:flex flex-col">
                                <Image
                                    src={project.coverImage.image}
                                    width={1000}
                                    height={500}
                                    alt={project.coverImage.alt}
                                    className="bg-zinc-800 rounded-2xl p-2"
                                />
                                <div className="flex-col m-8">
                                    <h2 className="font-semibold mb-8 text-5xl">
                                        {project.name}
                                    </h2>
                                    <div className="">
                                        <PortableText
                                            value={project.description}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            )}
        </section>
    );
}
