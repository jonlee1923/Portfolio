import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";
import JobExperience from "./JobExperience";

export default async function Jobs() {
    const job: JobType[] = await getJob();
    console.log(job);
    return (
        <section className="mt-32">
            <div className="mb-8">
                <h2 className="flex justify-center font-semibold text-4xl mb-4">
                    Work Experience
                </h2>
            </div>
            <div className="flex justify-center">
                <div className="flex-col w-2/3">
                    {job.map((data) => (
                        <JobExperience
                            key={data._id}
                            logo={data.logo}
                            name={data.name}
                            jobTitle={data.jobTitle}
                            startDate={data.startDate}
                            endDate={data.endDate}
                            description={data.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
