import React from "react";
import Link from "next/link";
import { PiLinkedinLogoLight } from "react-icons/pi";


import { TfiGithub } from "react-icons/tfi";
import { FaBlogger } from "react-icons/fa";

interface NavigationProps {
    github: string;
    linkedin: string;
}

const Navigation = (links: NavigationProps) => {
    return (
        <div className="flex justify-center mt-16">
            <div
                className="inline-flex rounded-md shadow-lg shadow-indigo-500"
                role="group"
            >
                <button
                    type="button"
                    className="gap-x-2 inline-flex items-center px-4 py-2 text-xl bg-transparent border rounded-s-lg hover:text-purple-300 hover:border-purple-300 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                    <TfiGithub />
                    <Link href={links.github}>Github</Link>
                </button>
                <button
                    type="button"
                    className="gap-x-2 inline-flex items-center px-4 py-2 text-xl bg-transparent border-t border-b hover:text-purple-300 hover:border-purple-300 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                    <PiLinkedinLogoLight />
                    <Link href={links.linkedin}>Linkedin</Link>
                </button>
                <button
                    type="button"
                    className="gap-x-2 inline-flex items-center px-4 py-2 text-xl bg-transparent border rounded-e-lg hover:text-purple-300 hover:border-purple-300 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white"
                >
                    <FaBlogger />
                    <Link href="/blog">Blog</Link>
                </button>
            </div>
        </div>
    );
};

export default Navigation;
