import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import thumb from "../assets/Backgrounds/vvv.jpg"
import { GiCrossedBones } from "react-icons/gi";

const VideoSection = () => {
    const [m, setM] = useState(false)

    return (
        <div
            className="bg-gradient-to-t w-full from-gray-200 via-purple-200 to-gray-200">

            {
                m && <div className="fixed z-50 w-11/12 mx-auto md:w-8/12 border shadow-sm shadow-indigo-600 border-indigo-500 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
                    <div className=" rounded-lg w-full relative">
                        <iframe className="w-full h-[350px] md:h-[550px] p-1 rounded-lg" src="https://www.youtube.com/embed/iogcY_4xGjo?si=C-Ki9U5pLWU7zWLX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div
                            onClick={() => setM(false)}
                            className="absolute top-1 right-1 flex justify-center items-center text-red-600  size-11 bg-indigo-200 rounded-l-full cursor-pointer hover:bg-red-500 hover:text-white">
                            <GiCrossedBones />

                        </div>
                    </div>
                </div>
            }
            <div className="w-full  flex justify-center items-center mx-auto px-6 py-12">
                <div className="md:grid mb-4 md:grid-cols-5 gap-8 items-center">
                    {/* Left Side: Title and Details */}
                    <div className="md:col-span-2 w-full   pb-5">
                        <h2 className="text-3xl  md:text-6xl font-extrabold font-font1 mb-4 bg-gradient-to-tr to-orange-500 from-pink-500 via-indigo-500 text-transparent bg-clip-text text-center md:text-start">
                            Discover LuxeStay
                        </h2>
                        <p className="w-full font-semibold font-font1 bg-gradient-to-tr to-orange-500 from-pink-500 via-indigo-500 text-transparent bg-clip-text text-xs md:text-sm text-justify">
                            LuxeStay offers a luxurious hotel experience designed to provide unmatched comfort and style for its guests. Every detail, from the ambiance to the amenities, is crafted to deliver a sense of elegance and relaxation. The hotel prioritizes guest satisfaction by redefining hospitality standards with personalized services and top-tier facilities. A video showcases the essence of this luxurious experience, inviting viewers to immerse themselves in the world of LuxeStay. Whether you're traveling for leisure or business, LuxeStay promises a stay that combines sophistication, comfort, and unforgettable memories.
                        </p>
                    </div>

                    {/* Right Side: Video Thumbnail */}
                    <div className="relative col-span-3">
                        {/* Thumbnail Image */}
                        <img
                            src={thumb}
                            alt="Video Thumbnail"
                            className="rounded-lg shadow-lg w-full  "
                        />

                        {/* Ripple Effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {[...Array(3)].map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute w-10 h-10 rounded-full border  border-pink-700"
                                    initial={{ scale: 1, opacity: 0.7 }}
                                    animate={{ scale: 3, opacity: 0 }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        delay: index * 0.6,
                                        ease: "linear",
                                    }}
                                ></motion.div>
                            ))}

                            {/* Play Icon */}
                            <div
                                onClick={() => setM(true)}
                                className="bg-red-600 flex items-center justify-center p-4 rounded-full z-10 cursor-pointer">
                                <FaPlay className="text-indigo-500 text-3xl group-hover:scale-110 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default VideoSection;
