import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import HeadingTitle from '../Utils/HeadingTitle';
import { useLocation } from 'react-router-dom';

const ContactUs = () => {
    const location = useLocation()
    const [h, setH] = useState(false)
    useEffect(() => {

        if (location.pathname === "/contact") {
            setH(true)
        }
    }, [])

    return (
        <div className={`w-full bg-gradient-to-t from-purple-200 to-indigo-50 text-gray-800 ${h && "min-h-screen pb-20 "}`}>
            <HeadingTitle one={"Contact Us"} two={"We’re here to help – reach out and let’s connect!"}></HeadingTitle>

            <div className="w-11/12 mx-auto">

                {/* Contact Information and Form Section */}
                <div className="grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 items-center gap-8 ">
                    {/* Contact Info (Left Side) */}
                    <motion.div
                        className="space-y-6 text-center md:text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-800">Get In Touch</h3>
                        <p className="text-gray-600 md:w-2/3 ">
                            We'd love to hear from you! Whether you have a question or need assistance, feel free to reach out.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <FaPhoneAlt className="text-indigo-500" />
                                <span>+880 178037870</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <FaEnvelope className="text-pink-500" />
                                <span>akwebdev69@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start md:space-x-4">
                                <FaMapMarkerAlt className="text-orange-500 text-2xl " />
                                <span>162 164 Nguyễn Lương Bằng, Phù Đổng, Pleiku, Gia Lai 60000, Vietnam</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center md:justify-start mt-6 space-x-6">
                            <motion.a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 text-2xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaFacebook />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-blue-400 hover:text-blue-600 text-2xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaTwitter />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-blue-700 hover:text-blue-900 text-2xl"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaLinkedin />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Contact Form (Right Side) */}
                    <motion.div
                        className="bg-white shadow-lg rounded-lg p-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6 text-center">Send Us a Message</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-600 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-600 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-600 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Enter your message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
