import React, { useEffect, useState } from "react";
import { FaBed, FaWifi, FaUtensils, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineBathtub, MdOutlineSmokingRooms } from "react-icons/md";
import { motion } from "framer-motion";
import axios from "axios";

const SpecialOffers = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_PREFIX}/top-rated-rooms`)
            .then(res => {
                console.log(res.data);
                setRooms(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section className="w-full py-20 bg-gradient-to-t from-indigo-200 to-indigo-100">
            <div className="max-w-7xl mx-auto px-5">
                {/* Title Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Special Offers & Promotions
                    </h1>
                    <p className="text-gray-600 mt-4 md:w-1/2 mx-auto ">
                        Unlock the best deals on top-rated rooms! Book now and experience
                        luxury like never before with unbeatable offers crafted just for
                        you.
                    </p>
                </div>

                {/* Offer Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms?.slice(2, 5).map((room, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 relative"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Discount Tag */}
                            <div className="absolute top-0 left-0 m-4 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                                Special Offer
                            </div>

                            {/* Image */}
                            <img
                                src={room.images.img_1}
                                alt={room.name}
                                className="w-full h-48 object-cover"
                            />

                            {/* Content */}
                            <div className="p-5 relative">
                                {/* Title & Price */}
                                <h2 className="text-xl font-semibold">{room.name}</h2>
                                <p className="text-gray-200 text-sm mt-1">
                                    {room.description.substring(0, 80)}...
                                </p>

                                {/* Price with discount */}
                                <div className="flex items-center mt-2">
                                    <span className="text-lg font-bold text-gray-200">
                                        ${room.price}/night
                                    </span>
                                    <span className="ml-2 text-lg font-semibold text-gray-400 line-through">
                                        $35000
                                    </span>
                                    <span className="ml-2 text-lg font-semibold text-yellow-300">
                                        20% OFF
                                    </span>
                                </div>

                                {/* Amenities */}
                                <div className="flex flex-wrap gap-3 mt-4 text-gray-200">
                                    {room.amenities.includes("Air Conditioning") && (
                                        <div className="flex items-center">
                                            <FaBed className="mr-2" />
                                            <span>Comfortable Beds</span>
                                        </div>
                                    )}
                                    {room.amenities.includes("High-speed Wi-Fi") && (
                                        <div className="flex items-center">
                                            <FaWifi className="mr-2" />
                                            <span>High-speed Wi-Fi</span>
                                        </div>
                                    )}
                                    {room.amenities.includes("Complimentary Breakfast") && (
                                        <div className="flex items-center">
                                            <FaUtensils className="mr-2" />
                                            <span>Breakfast Included</span>
                                        </div>
                                    )}
                                    {room.amenities.includes("Luxurious bathtub") && (
                                        <div className="flex items-center">
                                            <MdOutlineBathtub className="mr-2" />
                                            <span>Bathtub</span>
                                        </div>
                                    )}
                                    {room.policies.includes("No Smoking Allowed") && (
                                        <div className="flex items-center">
                                            <MdOutlineSmokingRooms className="mr-2" />
                                            <span>No Smoking</span>
                                        </div>
                                    )}
                                </div>

                                {/* Booking Button */}
                                <button className="w-full mt-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600">
                                    Book Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
