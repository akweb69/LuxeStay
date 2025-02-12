import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { motion } from "framer-motion";
import { FaUserCircle, FaEnvelope } from "react-icons/fa";
import bg from "../assets/Backgrounds/Recede.gif";

const My_Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div
            className="w-full min-h-screen flex justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full max-w-md text-center"
            >
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {user?.photoURL ? (
                        <img
                            src={user?.photoURL}
                            referrerPolicy="no-referrer"
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-500"
                        />
                    ) : (
                        <FaUserCircle className="text-9xl text-gray-300 mx-auto" />
                    )}
                </motion.div>
                <h2 className="mt-4 text-2xl font-bold text-white">
                    {user?.displayName || "User Name"}
                </h2>
                <p className="text-gray-200 flex justify-center items-center mt-2">
                    <FaEnvelope className="mr-2" /> {user?.email || "user@example.com"}
                </p>
            </motion.div>
        </div>
    );
};

export default My_Profile;
