import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTag, FaStar } from "react-icons/fa";
import img from "../assets/Images/Questions-pana.png";
import { Link } from "react-router-dom";

const OfferCard = () => {
    const [hovered, setHovered] = useState(false);
    const [timeLeft, setTimeLeft] = useState(120); // 120 seconds countdown timer

    useEffect(() => {
        const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="w-full py-10 flex justify-center bg-gradient-to-t to-indigo-300 from-indigo-950">
            <motion.div
                className="relative bg-gradient-to-r from-pink-500 to-indigo-600 rounded-lg p-6 shadow-xl hover:scale-105 transform transition-all duration-500 ease-in-out"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
            >
                {/* Animated Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 opacity-50 rounded-lg animate-pulse"></div>

                {/* Main Content */}
                <div className="text-center text-white relative z-10">
                    <h3 className="text-4xl font-semibold mb-4 text-shadow-md">Special Offer</h3>
                    <p className="text-lg mb-4 leading-relaxed">
                        Get <span className="text-yellow-300 font-bold">20% off</span> on your first booking at LuxeStay. Don’t miss out on this limited-time offer!
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.1, textShadow: "0 0 15px rgba(255, 255, 255, 0.6)" }}
                        className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
                    >
                        <Link to={"/rooms"}> Book Now</Link>
                    </motion.button>
                </div>

                {/* Countdown Timer in Top-Right Corner */}
                <div className="absolute top-4 right-4 text-white font-semibold z-10">
                    <p className="text-xl">Hurry Up! Offer ends in:</p>
                    <p className="text-4xl font-extrabold">
                        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                </div>

                {/* Rating Section */}
                <div className="absolute bottom-8 left-8 flex items-center space-x-1 z-10">
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-yellow-400 text-xl" />
                    <FaStar className="text-gray-400 text-xl" />
                    <span className="text-white ml-2 text-lg">4.0 (200 reviews)</span>
                </div>

                {/* Pop-up Details */}
                {hovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg opacity-0 transition-all duration-300 ease-in-out">
                        <div className="text-center text-white relative z-10">
                            <h3 className="text-2xl font-bold mb-2">Exclusive Offer!</h3>
                            <p className="mb-4">Use the code <strong>LUCKY20</strong> for an extra discount!</p>
                            <motion.button
                                whileHover={{ scale: 1.1, textShadow: "0 0 15px rgba(255, 255, 255, 0.6)" }}
                                className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
                            >
                                Claim Offer
                            </motion.button>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default OfferCard;
