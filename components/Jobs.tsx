import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";
import { PortableText } from "@portabletext/react";

export default async function Jobs() {
    const job: JobType[] = await getJob();
    return (
        <section className="mt-32">
            <div className="mb-16">
                <h2 className="flex justify-center font-semibold text-4xl mb-4">
                    Work Experience
                </h2>
            </div>
            <div className="flex justify-center">
                <div className="flex-col gap-y-12">
                    {job.map((data) => (
                        <div
                            key={data._id}
                            className="flex items-start lg:gap-x-6 gap-x-4 max-w-5xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
                        >
                            <a
                                href={data.logo}
                                rel="noreferrer noopener"
                                className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
                            >
                                <Image
                                    src={data.logo}
                                    className="object-cover"
                                    alt={`${data.name} logo`}
                                    fill
                                />
                            </a>
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-xl font-bold">
                                    {data.name}
                                </h3>
                                <p>{data.jobTitle}</p>
                                <small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                                    {data.startDate.toString()} to{" "}
                                    {data.endDate.toString()}
                                </small>
                                <PortableText value={data.description} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
