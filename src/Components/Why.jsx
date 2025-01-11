
import { motion } from "framer-motion";
import { FaThumbsUp, FaShieldAlt, FaWallet, FaStar } from "react-icons/fa";
import HeadingTitle from "../Utils/HeadingTitle";

const Why = () => {
    const features = [
        {
            icon: <FaThumbsUp className="text-5xl text-blue-500" />,
            title: "Top-Notch Service",
            description: "Experience unparalleled service tailored to your needs."
        },
        {
            icon: <FaShieldAlt className="text-5xl text-green-500" />,
            title: "Safety & Security",
            description: "Your safety is our priority with secure bookings and stays."
        },
        {
            icon: <FaWallet className="text-5xl text-orange-500" />,
            title: "Affordable Luxury",
            description: "Enjoy luxurious stays at prices that suit your budget."
        },
        {
            icon: <FaStar className="text-5xl text-yellow-500" />,
            title: "Highly Rated",
            description: "Trusted by thousands of customers worldwide."
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-200 to-purple-200">

            <HeadingTitle one={"Why Choose Us"} two={"Discover the LuxeStay advantage with exclusive benefits and top-notch service."}></HeadingTitle>
            <div className="w-11/12 mx-auto">


                {/* Features Section */}
                <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-white shadow-lg rounded-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="flex justify-center mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Why;
