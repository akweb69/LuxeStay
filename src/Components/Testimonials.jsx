import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import HeadingTitle from "../Utils/HeadingTitle";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    const [data, setData] = useState([]);

    // Fetch testimonials from API
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_PREFIX}/timestamp-review`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (
        <div className="w-full bg-gradient-to-t from-indigo-400 to-indigo-200 py-16">
            <div className="w-11/12 mx-auto">
                {/* Title */}
                <HeadingTitle
                    one={"Voices of Trust"}
                    two={"Discover what our guests have to say about their experiences. Their words reflect the trust and satisfaction we've earned. Join them in experiencing comfort and excellence."}
                />

                {/* Testimonials Section */}
                <div className="slider-container mx-6">
                    <Slider {...settings}>
                        {
                            data.map((item, idx) => (
                                <div key={idx} className="p-4">
                                    <div className="bg-white border border-indigo-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                        <img
                                            src={item?.user?.photoURL}
                                            referrerPolicy="no-referrer"
                                            alt=""
                                            className="w-16 h-16 rounded-full border-2 border-indigo-500 p-1 mx-auto"
                                        />
                                        <div className="text-center mt-4">
                                            <h1 className="text-xl font-semibold text-gray-800">{item?.user?.displayName}</h1>
                                            <p className="text-gray-600 italic text-sm">{item?.comment.slice(0, 100)}...</p>
                                            <Rating
                                                className="py-2"
                                                initialRating={item?.rating || 0}
                                                emptySymbol={<FaStar className="text-gray-300 text-2xl" />}
                                                fullSymbol={<FaStar className="text-yellow-500 text-2xl" />}
                                                readonly
                                            />
                                            <p className="text-xs text-gray-500">{item?.reviewTime}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
