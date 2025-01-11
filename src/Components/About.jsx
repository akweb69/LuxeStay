import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaRocket, FaUsers, FaCheckCircle, FaHeart, FaLightbulb } from "react-icons/fa";
import ScrollToTop from "../Utils/ScrollToTop";
import HeadingTitle from "../Utils/HeadingTitle";

const About = () => {
    return (
        <div className="w-full  bg-gradient-to-b from-purple-200 to-indigo-300 text-gray-800">
            <ScrollToTop></ScrollToTop>
            <HeadingTitle one={"About Us_"} two={"Discover our story, values, and commitment to delivering excellence"}></HeadingTitle>
            <div className="w-11/12 mx-auto">

                {/* Timeline Section */}
                <div className="relative ">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 to-purple-400 h-full"></div>

                    {/* Step 1 (Left Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-1/2 text-right pr-8">
                            <h3 className="text-xl font-bold">Our Mission</h3>
                            <p className="text-sm text-gray-600">
                                At LuxeStay, our mission is to redefine the hospitality experience by offering luxurious accommodations that feel like home. We are committed to providing exceptional comfort, modern amenities, and personalized services to ensure every stay is memorable. Our goal is to create a seamless booking experience that connects travelers to their dream destinations with ease and reliability. By embracing innovation and sustainability, we aim to set new standards in the hotel industry. LuxeStay is dedicated to making every guest feel valued, inspired, and cared for throughout their journey.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-indigo-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaRocket size={20} />
                        </div>
                        <div className="w-1/2"></div>
                    </motion.div>

                    {/* Step 2 (Right Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-1/2"></div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaUsers size={20} />
                        </div>
                        <div className="w-1/2 text-left pl-8">
                            <h3 className="text-xl font-bold">Community First</h3>
                            <p className="text-sm text-gray-600">
                                At LuxeStay, we prioritize building meaningful connections with the communities we serve. By supporting local businesses and embracing diverse cultures, we aim to create a positive impact beyond our accommodations. Our commitment is to foster a sense of belonging and contribute to the growth and well-being of every community we touch.
                            </p>
                        </div>
                    </motion.div>

                    {/* Step 3 (Left Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="w-1/2 text-right pr-8">
                            <h3 className="text-xl font-bold">Commitment to Excellence</h3>
                            <p className="text-sm text-gray-600">
                                At LuxeStay, we are dedicated to providing exceptional service and unforgettable experiences. We continually strive to exceed expectations by offering high-quality accommodations and top-notch amenities. Our unwavering commitment to excellence ensures that every guest enjoys a seamless, enjoyable, and memorable stay with us.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaCheckCircle size={20} />
                        </div>
                        <div className="w-1/2"></div>
                    </motion.div>

                    {/* Step 4 (Right Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="w-1/2"></div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaHeart size={20} />
                        </div>
                        <div className="w-1/2 text-left pl-8">
                            <h3 className="text-xl font-bold">Customer-Centric Approach</h3>
                            <p className="text-sm text-gray-600">
                                At LuxeStay, our guests are at the heart of everything we do. We listen attentively to their needs and preferences, ensuring a personalized and exceptional experience. Our customer-centric approach drives us to continuously improve and provide services that prioritize comfort, convenience, and satisfaction for every guest.
                            </p>
                        </div>
                    </motion.div>

                    {/* Step 5 (Left Side) */}
                    <motion.div
                        className="flex items-center pb-14 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        // viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className="w-1/2 text-right pr-8">
                            <h3 className="text-xl font-bold">Innovation at the Core</h3>
                            <p className="text-sm text-gray-600">
                                At LuxeStay, innovation is the driving force behind our services and offerings. We constantly explore new technologies and creative solutions to enhance the guest experience. Our commitment to innovation ensures that we stay ahead of industry trends, delivering modern, cutting-edge amenities that redefine luxury and convenience.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaLightbulb size={20} />
                        </div>
                        <div className="w-1/2"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
