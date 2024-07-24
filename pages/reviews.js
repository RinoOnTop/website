// pages/reviews.js
import { motion } from "framer-motion";
import { useState } from 'react';
import Modal from '../components/modal';
import Layout from "../layout/layout";
import { testimonials } from "../pages/testimonials";

const StarRating = ({ rate }) => {
    const stars = Array(5).fill(0).map((_, i) => (
        <svg
            key={i}
            className={`w-5 h-5 ${i < rate ? 'text-yellow-400' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.977a1 1 0 00.95.69h5.207c.969 0 1.372 1.24.588 1.81l-4.2 3.05a1 1 0 00-.363 1.118l1.618 4.977c.3.921-.755 1.688-1.54 1.118l-4.2-3.05a1 1 0 00-1.175 0l-4.2 3.05c-.784.57-1.839-.197-1.54-1.118l1.618-4.977a1 1 0 00-.363-1.118l-4.2-3.05c-.784-.57-.38-1.81.588-1.81h5.207a1 1 0 00.95-.69l1.618-4.977z" />
        </svg>
    ));
    return <div className="flex">{stars}</div>;
};

const ReviewCard = ({ name, alt, review, colSpan, rate }) => (
    <motion.div
        className={`${colSpan} bg-gray-800 p-6 rounded-lg shadow-xl	`}
        whileHover={{ scale: 1.11 }}

    >
        <p className="text-xl font-semibold">{name}</p>
        <p className="text3x1 font-thin">{alt}</p>
        <StarRating rate={rate} />
        <p className="mt-4 text3x1 text-gray-200">{review}</p>
    </motion.div>
);


export default function Reviews() {
    const formatDate = () => {
        const now = new Date();
        const options = {
            timeZone: 'Etc/GMT-3',
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };
        return now.toLocaleString('en-GB', options).replace(',', ' UTC+3');
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalSubmit = (data) => {
        // Send data to Discord webhook
        fetch('https://discord.com/api/webhooks/1244321358767329343/5rABLirAsUufVMN7Yw6uddulyw2uIgIEQZ1yVXR5Hu44WnfziuG8ZdPX1OnOjlt9d0wG', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                embeds: [
                    {
                        title: `New Review by ${data.name}`,
                        description: `**Rating:** ${data.rate} stars\n**Review:** \`\`\`${data.review}\`\`\` \n **DiscordID:** ${data.discordID} \n **Timestamp:** ${formatDate()}`,
                        color: 3066993, // Optional: Embed color in decimal
                    },
                ],
            }),
        });
    };
    return (
        <Layout title="Reviews">
            <div className="min-h-screen py-8 ">
                <div className="container mx-auto px-4">
                    <div className="container mx-auto px-4 flex items-center justify-between">
                        <h1 className="md:text-6xl text-3xl font-bold font-bold text-center mb-8">
                            Client Reviews
                        </h1>
                        <button onClick={() => setIsModalOpen(true)} className="md:text-lg text-lg font-bold font-bold text-center mb-8 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                            Want your review here?
                        </button>

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-3 gap-8 text-wrap">
                        {testimonials.map(({ id, name, alt, review, colSpan, rate }) => (
                            <ReviewCard key={id} name={name} alt={alt} review={review} colSpan={colSpan} rate={rate} />
                        ))}
                    </div>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleModalSubmit}
                />
            </div>
        </Layout>
    );
}
