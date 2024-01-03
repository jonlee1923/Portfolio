import React from 'react'
import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";

const AboutMe = async () => {
    const profile: ProfileType[] = await getProfile();
    return (
        <main className="mx-auto max-w-3xl px-6 pt-32">
            {profile &&
                profile.map((data) => (
                    <div key={data._id}>
                        <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
                            <div className="order-2 lg:order-none">
                                <div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
                                    <PortableText value={data.longBio}/>
                                </div>
                            </div>

                            <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                                <div>
                                    <Image
                                        className="rounded-2xl mb-4 object-cover max-h-100 min-h-100 bg-top bg-[#1d1d20]"
                                        src={data.profileImage.image}
                                        width={400}
                                        height={400}
                                        quality={100}
                                        alt={data.profileImage.alt}
                                    />

                                    <a
                                        href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                                        className="flex items-center justify-center gap-x-2 bg-white border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
                                    >
                                        <BiFile className="text-base" />{" "}
                                        Download Resumé
                                    </a>
                                </div>

                                <ul>
                                    <li>
                                        <a
                                            href={`mailto:${data.email}`}
                                            className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                                        >
                                            <BiEnvelope className="text-lg" />
                                            {data.email}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section className="flex-col mt-24">
                            <p className="flex justify-center text-zinc-400">
                                Some of the favourite tools and languages I enjoy using are
                            </p>

                            <ul className="flex justify-center flex-wrap items-center gap-3 mt-8">
                                {data.frameworks.map((framework, id) => (
                                    <li
                                        key={id}
                                        className="bg-white border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                                    >
                                        {framework}
                                    </li>
                                ))}
                            </ul>

                            <ul className="flex justify-center flex-wrap items-center gap-3 mt-8">
                                {data.languages.map((language, id) => (
                                    <li
                                        key={id}
                                        className="bg-white border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
                                    >
                                        {language}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                ))}
        </main>
    );
}

export default AboutMe
