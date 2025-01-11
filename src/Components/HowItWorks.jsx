import { motion } from "framer-motion";
import { FaSearch, FaCalendarCheck, FaHotel } from "react-icons/fa";
import HeadingTitle from "../Utils/HeadingTitle";

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaSearch className="text-4xl text-blue-500" />,
            title: "Search for Hotels",
            description: "Find your perfect stay from our curated list of hotels.",
        },
        {
            icon: <FaCalendarCheck className="text-4xl text-green-500" />,
            title: "Book Your Stay",
            description: "Easily book your preferred hotel with just a few clicks.",
        },
        {
            icon: <FaHotel className="text-4xl text-orange-500" />,
            title: "Enjoy Your Stay",
            description: "Relax and enjoy a luxurious experience during your stay.",
        },
    ];

    return (
        <div className="w-full bg-gradient-to-b from-indigo-300 to-gray-200">
            <div className="w-11/12 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <HeadingTitle one={" How It Works"} two={"LuxeStay makes it easy to find and book your dream hotel."}></HeadingTitle>
                </motion.div>

                {/* Steps Section */}
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-white shadow-lg rounded-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.67, delay: index * 0.3 }}
                        >
                            <div className="flex justify-center mb-6">{step.icon}</div>
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-500">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
