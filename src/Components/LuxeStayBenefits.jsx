import { motion } from 'framer-motion';
import { FaBed, FaConciergeBell, FaWifi, FaCalendarCheck, FaUmbrellaBeach, FaUtensils } from 'react-icons/fa';
import HeadingTitle from '../Utils/HeadingTitle';

const LuxeStayBenefits = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-blue-950 to-purple-950 text-white py-20">
            <HeadingTitle one={"LuxeStay Benefits"} two={"Discover the exclusive benefits of staying at LuxeStay. From premium amenities to exceptional service, we ensure that every guest enjoys a luxurious and unforgettable experience."} />

            <div className="w-11/12 mx-auto text-center space-y-12">
                <motion.div
                    className="flex flex-wrap justify-center gap-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-full md:w-5/12 lg:w-3/12 text-center">
                        <FaBed className="text-6xl text-pink-400 mx-auto mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold mb-2">Luxury Rooms</h3>
                        <p className="text-gray-300">Stay in luxurious rooms with premium amenities and stylish decor for a relaxing experience.</p>
                    </div>

                    <div className="w-full md:w-5/12 lg:w-3/12 text-center">
                        <FaConciergeBell className="text-6xl text-pink-400 mx-auto mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold mb-2">24/7 Concierge</h3>
                        <p className="text-gray-300">Our dedicated concierge team is available around the clock for any requests.</p>
                    </div>

                    <div className="w-full md:w-5/12 lg:w-3/12 text-center">
                        <FaWifi className="text-6xl text-pink-400 mx-auto mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold mb-2">High-Speed Wi-Fi</h3>
                        <p className="text-gray-300">Stay connected with fast and reliable Wi-Fi throughout the hotel.</p>
                    </div>

                    <div className="w-full md:w-5/12 lg:w-3/12 text-center">
                        <FaCalendarCheck className="text-6xl text-pink-400 mx-auto mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold mb-2">Flexible Booking</h3>
                        <p className="text-gray-300">Modify or cancel reservations easily as your plans change.</p>
                    </div>

                    <div className="w-full md:w-5/12 lg:w-3/12 text-center">
                        <FaUmbrellaBeach className="text-6xl text-pink-400 mx-auto mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold mb-2">Beachside Relaxation</h3>
                        <p className="text-gray-300">Relax by the beach and enjoy beautiful views and sunny days.</p>
                    </div>

                    <div className="w-full md:w-5/12 lg:w-3/12 text-center">
                        <FaUtensils className="text-6xl text-pink-400 mx-auto mb-4 animate-bounce" />
                        <h3 className="text-2xl font-semibold mb-2">Gourmet Dining</h3>
                        <p className="text-gray-300">Experience gourmet dining with exquisite dishes for every palate.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LuxeStayBenefits;
