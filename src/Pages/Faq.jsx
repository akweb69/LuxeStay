import React from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import img from "../assets/Images/Questions-pana.png";
import HeadingTitle from "../Utils/HeadingTitle";

const Faq = () => {
    const faqs = [
        {
            question: "What is LuxeStay?",
            answer: "LuxeStay is a premium hotel booking platform offering luxury accommodations tailored to your needs.",
        },
        {
            question: "How can I book a room?",
            answer: "You can book a room by browsing our available listings, selecting your preferred option, and completing the checkout process.",
        },
        {
            question: "What is the cancellation policy?",
            answer: "Our cancellation policy varies by room type. Please refer to the details provided during the booking process.",
        },
        {
            question: "Are there any discounts available?",
            answer: "We offer seasonal discounts and exclusive deals. Subscribe to our newsletter to stay updated.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-purple-200 to-indigo-300 ">
            <HeadingTitle one={"Frequently Asked Questions"} two={"Find answers to your questions – all in one place."}></HeadingTitle>
            <div className="w-11/12 mx-auto">


                <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side Image */}
                    <div className="lg:block md:flex justify-center mb-8 lg:mb-0">
                        <img
                            src={img}
                            alt="FAQ illustration"
                            className="rounded-lg  w-full lg:w-[80%] object-cover"
                        />
                    </div>

                    {/* Right Side FAQ Questions */}
                    <div className="flex justify-center">
                        <div className="space-y-6 w-full max-w-2xl">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <FaQuestionCircle className="text-orange-400 text-2xl" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-orange-500 transition-all duration-300">
                                                {faq.question}
                                            </h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
