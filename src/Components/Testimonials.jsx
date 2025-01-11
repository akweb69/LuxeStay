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
                const allReviews = res.data;
                setData(allReviews);
                console.log(allReviews)

            })
            .catch((err) => console.error(err));
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },

        ]
    };

    return (
        <div className="w-full bg-gradient-to-t from-indigo-300 to-indigo-200">
            <div className="w-11/12 mx-auto">
                {/* Title */}
                <HeadingTitle one={"Voices of Trust"} two={"Discover what our guests have to say about their experiences. Their words reflect the trust and satisfaction we've earned. Join them in experiencing comfort and excellence."}></HeadingTitle>

                {/* Testimonials Section */}

                <div className="slider-container mx-6">
                    <Slider {...settings}>
                        {
                            data.map((item, idx) =>
                                <div key={idx} className="">
                                    <div className="mx-2 bg-transparent border border-indigo-700 p-4 flex justify-center items-center flex-col rounded-xl h-[300px] overflow-auto">
                                        <img src={item?.user?.photoURL} referrerPolicy="no-referrer" alt="" className="w-14 h-14 rounded-full border p-1" />
                                        <div className="flex-1 text-center">
                                            <h1 className="text-lg md:text-xl font-semibold font-font1 text-gray-700">{item?.user?.displayName}</h1>
                                            <p className="text-center text-sm">{item?.comment}</p>
                                            <Rating className="py-2"
                                                initialRating={item?.rating || 0}
                                                emptySymbol={<FaStar className="text-gray-300 text-2xl" />}
                                                fullSymbol={<FaStar className="text-yellow-500 text-2xl" />}
                                                readonly
                                            />
                                            <p className="">{item?.reviewTime}</p>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
