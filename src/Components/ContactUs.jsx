import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import HeadingTitle from '../Utils/HeadingTitle';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const ContactUs = () => {
    const location = useLocation();
    const [h, setH] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (location.pathname === "/contact") {
            setH(true);
        }
    }, [location]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: '' });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Handle form submission (e.g., send data to an API)
            console.log('Form submitted:', formData);
            toast.success("Message sent successfully!")
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className={`w-full bg-gradient-to-t from-purple-200 via-indigo-100 to-pink-50 text-gray-800 ${h && "min-h-screen pb-20"}`}>
            <HeadingTitle one={"Contact Us"} two={"We’re here to help – reach out and let’s connect!"} />

            <div className="w-11/12 mx-auto py-12">
                {/* Contact Information and Form Section */}
                <div className="grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 items-center gap-8">
                    {/* Contact Info (Left Side) */}
                    <motion.div
                        className="space-y-6 text-center md:text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-bold text-gray-800">Get In Touch</h3>
                        <p className="text-gray-600 md:w-2/3">
                            We'd love to hear from you! Whether you have a question or need assistance, feel free to reach out.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <FaPhoneAlt className="text-indigo-500 text-xl" />
                                <span>+880 178037870</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <FaEnvelope className="text-pink-500 text-xl" />
                                <span>akwebdev69@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <FaMapMarkerAlt className="text-orange-500 text-xl" />
                                <span>162 164 Nguyễn Lương Bằng, Phù Đổng, Pleiku, Gia Lai 60000, Vietnam</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex justify-center md:justify-start mt-6 space-x-6">
                            <motion.a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 text-2xl transition-transform transform hover:scale-110"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaFacebook />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-blue-400 hover:text-blue-600 text-2xl transition-transform transform hover:scale-110"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaTwitter />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-blue-700 hover:text-blue-900 text-2xl transition-transform transform hover:scale-110"
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
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6 text-center">Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-600 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-600 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-600 mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Enter your message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500`}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;