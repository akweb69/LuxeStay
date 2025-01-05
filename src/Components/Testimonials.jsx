import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import ReactRating from "react-rating";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);

    // Fetch testimonials from API
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_PREFIX}/timestamp-review`)
            .then((res) => {
                const allReviews = res.data;
                setData(allReviews);

            })
            .catch((err) => console.error(err));
    }, []);

    // Handle Next
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    // Handle Previous
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <div className="w-full py-20 bg-gradient-to-t from-indigo-300 to-indigo-200">
            <div className="w-11/12 mx-auto">
                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-bold font-font1 text-center">
                    Voices of Trust
                </h1>
                <p className="text-xs md:text-sm text-center md:w-1/2 mx-auto pt-4 text-gray-500 pb-10">
                    "Discover what our guests have to say about their experiences. Their words reflect the trust and satisfaction we've earned. Join them in experiencing comfort and excellence."
                </p>

                {/* Testimonials Section */}
                <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center gap-6">
                    {/* Left Button for large screens */}
                    <button
                        onClick={handlePrev}
                        className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
                    >
                        Prev
                    </button>

                    {/* Single Card */}
                    <div className="w-full md:w-2/3 lg:w-2/3 bg-gradient-to-tr to-pink-400 from-indigo-600 p-6 rounded-lg shadow-lg text-center mx-4">
                        {data.length > 0 && (
                            <>
                                <div className="flex flex-col items-center">
                                    <img
                                        referrerPolicy="no-referrer"
                                        src={data[currentIndex]?.user?.photoURL}
                                        alt="User"
                                        className="w-16 h-16 rounded-full mb-4"
                                    />
                                    <h4 className="font-semibold text-lg text-white">
                                        {data[currentIndex]?.user?.displayName}
                                    </h4>
                                </div>
                                <ReactRating
                                    emptySymbol={<FaStar className="text-gray-400" />}
                                    fullSymbol={<FaStar className="text-yellow-500" />}
                                    initialRating={data[currentIndex].rating}
                                    readonly
                                />
                                <p className="text-gray-300 my-4 italic">
                                    "{data[currentIndex]?.comment}"
                                </p>
                                <span className="text-sm text-gray-100">
                                    {new Date(data[currentIndex]?.reviewTime).toLocaleDateString()}
                                </span>
                            </>
                        )}
                    </div>

                    {/* Right Button for large screens */}
                    <button
                        onClick={handleNext}
                        className="hidden lg:block bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
                    >
                        Next
                    </button>
                </div>

                {/* Buttons for small screens */}
                <div className="flex lg:hidden justify-center gap-4 mt-6">
                    <button
                        onClick={handlePrev}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
                    >
                        Prev
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
