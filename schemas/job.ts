import { BiBriefcase } from "react-icons/bi";

const job = {
    name: "job",
    title: "Job",
    type: "document",
    icon: BiBriefcase,
    fields: [
        {
            name: "name",
            title: "Company Name",
            type: "string",
            description: "What is the name of the company?",
        },
        {
            name: "jobTitle",
            title: "Job Title",
            type: "string",
            description: "What is the title of the job?",
        },
        {
            name: "logo",
            title: "Company Logo",
            type: "image",
        },
        {
            name: "description",
            title: "Job Description",
            type: "text",
            rows: 5,
            description:
                "Write a description of your role & achievements in the company",
        },
        {
            name: "startDate",
            title: "Start Date",
            type: "date",
        },
        {
            name: "endDate",
            title: "End Date",
            type: "date",
        },
    ],
};

export default job;
