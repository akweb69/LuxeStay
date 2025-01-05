import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWifi, FaSwimmer, FaDumbbell, FaConciergeBell, FaSpa, FaUtensils, FaShuttleVan, FaBriefcase, FaTshirt, FaCoffee } from "react-icons/fa";
import ScrollToTop from "../Utils/ScrollToTop";
import { Helmet } from "react-helmet";

const imageLinks = [
    "https://i.ibb.co.com/0Fmp6WC/s6.jpg",
    "https://i.ibb.co.com/bF1Y8VC/s5.jpg",
    "https://i.ibb.co.com/tJpX0Sv/s4.jpg",
    "https://i.ibb.co.com/zhhwyt4/s3.jpg",
    "https://i.ibb.co.com/ngjT341/s2.jpg",
    "https://i.ibb.co.com/NxbkmyC/s1.jpg",
    "https://i.ibb.co.com/LvqdJHm/h6.jpg",
    "https://i.ibb.co.com/n0XqBf0/h5.jpg",
    "https://i.ibb.co.com/ZBKy3m5/h4.jpg",
    "https://i.ibb.co.com/S6mZqmX/h3.jpg",
    "https://i.ibb.co.com/khHbpn8/h2.jpg",
    "https://i.ibb.co.com/Wnt34PV/h1.jpg",
    "https://i.ibb.co.com/26vn5gN/m6.jpg",
    "https://i.ibb.co.com/phm5bKd/m5.jpg",
    "https://i.ibb.co.com/rwXqDGK/m4.jpg",
    "https://i.ibb.co.com/RhBMWXJ/m3.jpg",
    "https://i.ibb.co.com/rQDQR49/m2.jpg",
    "https://i.ibb.co.com/rZ9TcSb/m1.jpg",
    "https://i.ibb.co.com/vXN9X7H/o6.jpg",
    "https://i.ibb.co.com/NNCzB02/o5.jpg",
    "https://i.ibb.co.com/frgL6K9/04.jpg",
    "https://i.ibb.co.com/5hhPRKx/o3.jpg",
    "https://i.ibb.co.com/2hNNBxV/o2.jpg",
    "https://i.ibb.co.com/WHckKSV/o1.jpg",
    "https://i.ibb.co.com/Q8SFZfH/l6.jpg",
    "https://i.ibb.co.com/jfGw8WW/l5.jpg",
    "https://i.ibb.co.com/Hdjhn1q/l4.jpg",
    "https://i.ibb.co.com/LSZqXQZ/l3.jpg",
    "https://i.ibb.co.com/PCTndMy/l2.jpg",
    "https://i.ibb.co.com/sp4qdSC/l1.jpg",
    "https://i.ibb.co.com/BVnKMXF/z6.jpg",
    "https://i.ibb.co.com/vX8WRND/z5.jpg",
    "https://i.ibb.co.com/R2yt4cw/z4.jpg",
    "https://i.ibb.co.com/wLvhnj1/z3.jpg",
    "https://i.ibb.co.com/1ftvjBV/z2.jpg",
    "https://i.ibb.co.com/1LXNtzj/z1.jpg",
    "https://i.ibb.co.com/KL3MkwX/p6.jpg",
    "https://i.ibb.co.com/DR85qSz/p5.jpg",
    "https://i.ibb.co.com/Sw094Kq/p4.jpg",
    "https://i.ibb.co.com/fv9hhJn/p3.jpg",
    "https://i.ibb.co.com/b10kqcs/p2.jpg",
    "https://i.ibb.co.com/w66qRdT/p1.jpg",
    "https://i.ibb.co.com/grVbjFD/e6.jpg",
    "https://i.ibb.co.com/gRp09pL/e5.jpg",
    "https://i.ibb.co.com/S7BZTJB/e4.jpg",
    "https://i.ibb.co.com/HzWg51z/e3.jpg",
    "https://i.ibb.co.com/TvT9V4r/e2.jpg",
    "https://i.ibb.co.com/QnK5VmC/e1.jpg",
    "https://i.ibb.co.com/sCd1Kvk/r8.jpg",
    "https://i.ibb.co.com/93JMJcM/r7.jpg",
    "https://i.ibb.co.com/0K7GTfS/r6.jpg",
    "https://i.ibb.co.com/4FgqNPM/r5.jpg",
    "https://i.ibb.co.com/Rc9z79F/r4.jpg",
    "https://i.ibb.co.com/ct28vvC/r3.jpg",
    "https://i.ibb.co.com/BcHzGwS/r2.jpg",
    "https://i.ibb.co.com/qnfpvfD/r1.jpg"
];


const eventsData = [
    { title: "Music Night", description: "Enjoy a night filled with live music and entertainment.", img: "https://i.ibb.co.com/93JMJcM/r7.jpg" },
    { title: "Yoga Retreat", description: "Relax and rejuvenate with our exclusive yoga sessions.", img: "https://i.ibb.co.com/BcHzGwS/r2.jpg" },
    { title: "Cooking Workshop", description: "Learn to cook gourmet meals with top chefs.", img: "https://i.ibb.co.com/w66qRdT/p1.jpg" },
    { title: "Wine Tasting", description: "Explore a selection of the finest wines.", img: "https://i.ibb.co.com/PCTndMy/l2.jpg" },
    { title: "Art Exhibition", description: "Discover local and international art pieces.", img: "https://i.ibb.co.com/vXN9X7H/o6.jpg" },
    { title: "Outdoor Cinema", description: "Watch classic movies under the stars.", img: "https://i.ibb.co.com/26vn5gN/m6.jpg" },
    { title: "Pool Party", description: "Dive into fun with our themed pool parties.", img: "https://i.ibb.co.com/bF1Y8VC/s5.jpg" },
    { title: "Fitness Bootcamp", description: "Stay active with our professional trainers.", img: "https://i.ibb.co.com/RhBMWXJ/m3.jpg" },
    { title: "Networking Event", description: "Connect with professionals in a relaxed setting.", img: "https://i.ibb.co.com/Wnt34PV/h1.jpg" },
    { title: "Cultural Fest", description: "Celebrate culture with music, food, and art.", img: "https://i.ibb.co.com/Wnt34PV/h1.jpg" },
];


const amenitiesData = [
    { name: "Free Wi-Fi", icon: <FaWifi className="text-blue-500 text-3xl" /> },
    { name: "Swimming Pool", icon: <FaSwimmer className="text-teal-500 text-3xl" /> },
    { name: "Fitness Center", icon: <FaDumbbell className="text-gray-600 text-3xl" /> },
    { name: "Room Service", icon: <FaConciergeBell className="text-orange-500 text-3xl" /> },
    { name: "Spa and Wellness", icon: <FaSpa className="text-purple-500 text-3xl" /> },
    { name: "Complimentary Breakfast", icon: <FaUtensils className="text-yellow-500 text-3xl" /> },
    { name: "Airport Shuttle", icon: <FaShuttleVan className="text-green-500 text-3xl" /> },
    { name: "Conference Rooms", icon: <FaBriefcase className="text-indigo-500 text-3xl" /> },
    { name: "Laundry Service", icon: <FaTshirt className="text-red-500 text-3xl" /> },
    { name: "On-Site Restaurant", icon: <FaCoffee className="text-brown-500 text-3xl" /> },
];

const GalleryPage = () => {
    const [visibleImages, setVisibleImages] = useState(6);
    const [visibleEvents, setVisibleEvents] = useState(3);
    const [visibleAmenities, setVisibleAmenities] = useState(10);

    const handleShowMoreImages = () => {
        setVisibleImages((prev) => Math.min(prev + 6, imageLinks.length));
    };

    const handleShowMoreEvents = () => {
        setVisibleEvents((prev) => Math.min(prev + 3, eventsData.length));
    };

    const handleShowMoreAmenities = () => {
        setVisibleAmenities((prev) => Math.min(prev + 3, amenitiesData.length));
    };

    return (
        <div className="p-6">
            <ScrollToTop></ScrollToTop>
            <Helmet>
                <title> Gallery | LuxeStay </title>
            </Helmet>
            {/* Gallery Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {imageLinks.slice(0, visibleImages).map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="overflow-hidden rounded-lg shadow-lg"
                        >
                            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover" />
                        </motion.div>
                    ))}
                </div>
                {visibleImages < imageLinks.length && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleShowMoreImages}
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Show More Images
                        </button>
                    </div>
                )}
            </section>

            {/* Events Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {eventsData.slice(0, visibleEvents).map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative">
                                <img
                                    src={event.img} // Placeholder image, replace with actual event image
                                    alt={event.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
                                    <h3 className="text-lg font-semibold">{event.title}</h3>
                                    <p className="text-sm">{event.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {visibleEvents < eventsData.length && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleShowMoreEvents}
                            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                        >
                            Show More Events
                        </button>
                    </div>
                )}
            </section>

            {/* Amenities Section */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {amenitiesData.slice(0, visibleAmenities).map((amenity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            <div>{amenity.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800">{amenity.name}</h3>
                        </motion.div>
                    ))}
                </div>
                {visibleAmenities < amenitiesData.length && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={handleShowMoreAmenities}
                            className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                        >
                            Show More Amenities
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default GalleryPage;
