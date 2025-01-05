import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NewsLetter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted email:", email);
    };

    return (
        <div className="bg-gradient-to-t from-gray-900  to-indigo-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:text-4xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Stay Updated with Our Newsletter
                </motion.h2>
                <motion.p
                    className="mt-4 text-lg text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Subscribe to our newsletter to get the latest news, updates, and offers delivered right to your inbox.
                </motion.p>
                <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
                    <div className="flex items-center">
                        <motion.div
                            className="flex items-center w-full"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, type: 'spring', stiffness: 100 }}
                        >
                            <FaEnvelope className="text-indigo-600 mr-4" size={24} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="ml-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;
