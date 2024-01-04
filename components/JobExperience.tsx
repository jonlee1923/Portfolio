"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { PortableTextBlock } from "sanity";

interface JobDetails {
    logo: string;
    name: string;
    jobTitle: string;
    startDate: Date;
    endDate: Date;
    description: PortableTextBlock[];
}
const JobExperience = (data: JobDetails) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const toggleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };

    return (
        <div className="flex space-between">
            <div className="flex items-start mt-8 gap-x-6 w-full relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800">
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
                <div>
                    <div className="flex flex-col items-start space-y-2">
                        <h3 className="text-2xl font-bold">{data.name}</h3>
                        <p className="text-md font-bold">{data.jobTitle}</p>
                        <small className="text-sm text-stone-600 mt-2 tracking-widest ">
                            {data.startDate.toString()} to{" "}
                            {data.endDate.toString()}
                        </small>

                        {isDropDownOpen && (
                            <ul className="marker:text-black-400 list-disc pl-5 space-y-3 text-stone-900">
                                {data.description.map((block, index) => (
                                    <li key={index}>
                                        <PortableText value={block} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-end mt-16">
                    <button
                        onClick={toggleDropDown}
                    >
                        {isDropDownOpen ? <SlArrowUp /> : <SlArrowDown />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobExperience;
