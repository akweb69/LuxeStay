
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and About Section */}
                <div>
                    <h1 className="text-3xl font-bold text-white mb-4">LuxeStay</h1>
                    <p className="text-gray-400">
                        Discover luxury and comfort at its best. LuxeStay offers premium hotel experiences
                        tailored for you.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><Link to="#" className="text-gray-400 hover:text-white">Home</Link></li>
                        <li><Link to="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                        <li><Link to="#" className="text-gray-400 hover:text-white">Rooms</Link></li>
                        <li><Link to="#" className="text-gray-400 hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link to="#" className="text-gray-400 hover:text-blue-500">
                            <FaFacebook size={24} />
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-blue-400">
                            <FaTwitter size={24} />
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-pink-500">
                            <FaInstagram size={24} />
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-blue-700">
                            <FaLinkedin size={24} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
                <p>&copy; 2024 LuxeStay. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
