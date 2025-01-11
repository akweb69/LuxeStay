import { motion } from "framer-motion"; // For animation effects
import { FaBed, FaConciergeBell, FaWifi, FaCalendarCheck, FaUmbrellaBeach, FaUtensils } from "react-icons/fa"; // For icons
import HeadingTitle from "../Utils/HeadingTitle";

const LuxeStayBenefits = () => {
    return (
        <div className=" bg-gradient-to-b pb-20 from-indigo-950 via-blue-950 to-purple-950 text-white">
            <HeadingTitle one={"LuxeStay Benefits"} two={"Discover the exclusive benefits of staying at LuxeStay. From premium amenities to exceptional service, we ensure that every guest enjoys a luxurious and unforgettable experience."}></HeadingTitle>
            <div className="w-11/12 mx-auto text-center">


                {/* Benefits List */}
                <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-center items-center">
                    {/* Benefit 1 */}
                    <motion.div
                        className="p-6 border h-full border-white/30 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/10 flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <FaBed className="text-4xl text-pink-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Luxury Rooms</h3>
                        <p className="text-gray-300">
                            Stay in luxurious rooms with premium amenities and stylish decor, ensuring a comfortable and relaxing experience.
                        </p>
                    </motion.div>

                    {/* Benefit 2 */}
                    <motion.div
                        className="p-6 border h-full border-white/30 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/10 flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <FaConciergeBell className="text-4xl text-pink-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">24/7 Concierge Service</h3>
                        <p className="text-gray-300">
                            Our dedicated concierge team is available around the clock to assist with any requests, ensuring a seamless stay.
                        </p>
                    </motion.div>

                    {/* Benefit 3 */}
                    <motion.div
                        className="p-6 border h-full border-white/30 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/10 flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <FaWifi className="text-4xl text-pink-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">High-Speed Wi-Fi</h3>
                        <p className="text-gray-300">
                            Stay connected with fast and reliable Wi-Fi throughout the hotel, ensuring you can work, stream, and browse with ease.
                        </p>
                    </motion.div>

                    {/* Benefit 4 */}
                    <motion.div
                        className="p-6 h-full border border-white/30 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/10 flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <FaCalendarCheck className="text-4xl text-pink-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Flexible Booking</h3>
                        <p className="text-gray-300">
                            Enjoy the flexibility to modify or cancel your reservation as your plans change, with no hassle.
                        </p>
                    </motion.div>

                    {/* Benefit 5 */}
                    <motion.div
                        className="p-6 border h-full border-white/30 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/10 flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <FaUmbrellaBeach className="text-4xl text-pink-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Beachside Relaxation</h3>
                        <p className="text-gray-300">
                            Relax by the beach and enjoy beautiful views, perfect for unwinding and soaking in the sun.
                        </p>
                    </motion.div>

                    {/* Benefit 6 */}
                    <motion.div
                        className="p-6 border h-full border-white/30 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-white/10 flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <FaUtensils className="text-4xl text-pink-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Gourmet Dining</h3>
                        <p className="text-gray-300">
                            Enjoy delicious meals at our on-site restaurants, featuring gourmet dining experiences to satisfy every palate.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LuxeStayBenefits;
