import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { useState } from 'react';
import Layout from "../layout/layout";

export default function Experience() {
    const experiences = [
        {
            role: "Full-time",
            title: "L2 Game Support Specialist",
            company: "@UltaHost",
            duration: "Jun 2024 - Present",
            responsibilities: [
                "Advanced Technical Support: Provided tier 2 support for complex gaming issues, resolving escalated tickets and ensuring a high level of customer satisfaction.",
                "Problem Resolution: Diagnosed and resolved technical problems related to game functionality, connectivity, and account management.",
                "Customer Interaction: Communicated effectively with players through multiple channels (email, chat, and tickets) to troubleshoot issues and provide solutions.",
                "Knowledge Base Management: Updated and maintained the internal knowledge base with solutions to common and emerging issues, ensuring team access to accurate information.",
                "Team Collaboration: Worked closely with the development and QA teams to identify and report bugs.",
                "Performance Metrics: Consistently met or exceeded performance metrics, including resolution time, customer satisfaction scores, and ticket closure rates.",
                "Game Updates: Stayed informed about game updates, patches, and new features to provide accurate and current information to players.",
                "Feedback and Reporting: Collected player feedback and reported recurring issues to the development team for further investigation and resolution."
            ]
        },
        {
            role: "Part-time",
            title: "System Administrator",
            company: "@Ultraplex Hosting",
            duration: "Aug 2023 - Oct 2023",
            responsibilities: [
                "Game Server Management: Installed, Managed and maintained game servers using Pterodactyl.",
                "Virtualization Environments: Experienced with virtualization environments such as Proxmox.",
                "Web Hosting Panels: Hands-on experience with web hosting panels like CloudPanel.",
                "Control Panels: Worked with other control panels including VirtFusion and CyberPanel.",
                "Backup Systems: Set up and managed backup systems to ensure data security .",
                "Database Management: Configured and maintained phpMyAdmin for database management.",
                "Billing and Client Management: Implemented and managed WHMCS for billing and client management.",
                "Server Performance and Security: Ensured server performance, security, and reliability through regular monitoring and maintenance.",
            ]
        },

        // Add more experiences here
    ];

    const [expandedIndexes, setExpandedIndexes] = useState([]);

    const toggleExpand = (index) => {
        setExpandedIndexes(prevState =>
            prevState.includes(index)
                ? prevState.filter(i => i !== index)
                : [...prevState, index]
        );
    };

    return (
        <Layout title="Experience">
            <div className="flex-grow items-center">
                <div className="container mx-auto justify-center ">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                        <div className="text-center pb-9 mt-20">
                            <h1 className="md:text-6xl text-3xl font-bold">
                                <span className="text-rose-500"> Experience </span>
                            </h1>
                            <p className="text-gray-200 italic text-lg pb-7">Well...., yeah ⚆ _ ⚆</p>
                        </div>
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-gray-800 text-white p-5  rounded mb-5">
                                <h1 className="text-3xl font-bold text-center pt-1 text-gray-400">{exp.role}</h1>

                                <div className="justify-between pt-1">
                                    <span className="text-4xl">{exp.title}</span>
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                                        className="bg-transparent border border-transparent p-2 rounded-full items-center justify-between text-white ml-4 text-xl margin-y-7"
                                        onClick={() => toggleExpand(index)}
                                    >
                                        <FontAwesomeIcon icon={expandedIndexes.includes(index) ? faChevronUp : faChevronDown} className="items-center w-4 h-4 text-yellow-500" />
                                    </motion.button>

                                </div>
                                {expandedIndexes.includes(index) && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                                        <ul className="list-disc pl-5 text-gray-400 mt-4">
                                            <h2 className="text-center text-white text-lg">Responsibilities</h2>
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i}><strong className="text-white">{resp.split(":")[0]}:</strong>{resp.split(":")[1]}</li>
                                            ))}
                                        </ul>

                                    </motion.div>
                                )}
                                <div className="flex justify-between pt-3">
                                    <span>{exp.company}</span>
                                    <span>{exp.duration}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <div className="bg-gray-800 text-white p-5 rounded mb-5">

                        <div className="justify-between flex flex-grow text-center">
                            <h2 className="text-4xl">Freelancer</h2>
                            <div className='flex justify-between'>
                                <h2 className="text-center text-white text-lg p-2 text-3x1">Aug 2022 - Present</h2>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    )
}
