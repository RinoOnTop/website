// components/Modal.js

import { useState } from 'react';
import Layout from '../layout/layout';

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [discordID, setdiscordID] = useState('');
    const [review, setReview] = useState('');
    const [rate, setRate] = useState(5);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, review, rate, discordID });
        onClose();
    };

    return (
        <Layout>
            <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
                <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl mb-4">Add a Review</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block mb-2">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-gray-700 w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Review</label>
                            <textarea
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                className="bg-gray-700 w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Your Discord </label>
                            <input
                                type="text"
                                value={discordID}
                                onChange={(e) => setdiscordID(e.target.value)}
                                className="bg-gray-700 w-full px-4 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block mb-2">Rating</label>
                            <select
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                className="bg-gray-700 w-full px-4 py-2 border rounded-lg"
                            >
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <option key={value} value={value}>
                                        {value}⭐
                                    </option>
                                ))}
                            </select>

                        </div>
                        <p>Make sure to Write your Discord name to recieve a cookie </p>

                        <div className="flex justify-center pt-3">

                            <button
                                type="submit"
                                className="mr-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="mr-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Modal;
