import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Jobs from "@/components/Jobs";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";

export default async function Home() {
    const profile: ProfileType[] = await getProfile();
    return (
        <main>
            <section className="flex flex-col justify-center gap-x-12 min-h-screen bg-slate-900 text-white">
                {profile &&
                    profile.map((data) => (
                        <div key={data._id} className="">
                            <h1 className="flex justify-center text-4xl sm:text-6xl font-bold tracking-tight mb-6 lg:leading-[3.7rem] leading-tight min-w-full">
                                {data.fullName}
                            </h1>
                            <h1 className="flex justify-center text-xl mb-6">
                                Software Engineer
                            </h1>
                            <Navigation
                                github={data.socialLinks.github}
                                linkedin={data.socialLinks.linkedin}
                            />
                        </div>
                    ))}
            </section>
            <section className="bg-gradient-to-r from-blue-300 to-gray-100">
                <AboutMe />
                <Jobs />
                <Projects />
                <Footer/>
            </section>
        </main>
    );
}
