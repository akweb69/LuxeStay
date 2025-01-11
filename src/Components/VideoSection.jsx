import React, { useState } from "react";
import { MdOutlinePlayArrow } from "react-icons/md";
import { GiCrossedBones } from "react-icons/gi";
import HeadingTitle from "../Utils/HeadingTitle";

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
            <div className="w-11/12 mx-auto">
                <HeadingTitle one={" Discover LuxeStay"} two={"Experience the ultimate comfort and luxury at your fingertips – your dream stay awaits!"}></HeadingTitle>
                {/* content section start here  */}
                <div className="w-full relative">
                    <img src="https://i.ibb.co/qsjzbJ3/2149714407.jpg" className="w-full rounded-xl max-h-[500px] object-cover p-1 border  " alt="" />
                    <div
                        onClick={() => setM(true)}
                        className="absolute play cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="bg-red-500 p-3 rounded-full flex justify-center items-center">
                            <MdOutlinePlayArrow className="text-4xl text-white"></MdOutlinePlayArrow>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default VideoSection;
