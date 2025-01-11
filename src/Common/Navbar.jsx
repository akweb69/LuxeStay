import { Link, NavLink } from "react-router-dom";
import { RiBuilding2Line } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { motion } from "motion/react"
import { Tooltip } from "react-tooltip";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const { hanldeLogout, user, loading } = useContext(AuthContext)
    const [navBg, setNavBg] = useState(false);
    const [menu, setMenu] = useState(false)


    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 200) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            className={`${navBg ? "bg-indigo-50 fixed w-full top-0 z-10" : "bg-slate-100"} transition-all duration-300 `}
        >
            <div className="w-full h-16 ">
                <div className="w-11/12  h-full mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link className="flex items-end text-lg sm:text-2xl md:text-4xl font-bold font-font1">
                        <RiBuilding2Line className="text-amber-400 text-3xl md:text-5xl" />
                        <span className="bg-gradient-to-tr from-indigo-700 via-pink-600 to-purple-700 text-transparent bg-clip-text">LuxeStay</span>
                    </Link>

                    {/* Right side with link and btn */}
                    <div className="flex gap-4 items-center font-font2_nato">
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-1">
                                <li>
                                    <NavLink className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/rooms"}>Rooms</NavLink>
                                </li>
                                <li>
                                    <NavLink className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/my-bookings"}>My Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/gallery"}>Gallery</NavLink>
                                </li>
                                <li>
                                    <NavLink className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/about"}>About</NavLink>
                                </li>
                            </ul>
                        </div>
                        {/* btn */}
                        {
                            loading ? <div className=""><span className="loading loading-ring loading-lg text-red-500"></span>
                            </div> :
                                <div className="">
                                    {
                                        user && user?.email ?
                                            <div className="flex items-center gap-4">
                                                <div className="">
                                                    <div id="clickable" className="size-10 rounded-full border border-purple-950">
                                                        <img
                                                            referrerPolicy="no-referrer"
                                                            src={user?.photoURL} className="w-full rounded-full" />
                                                    </div>
                                                    <div className="">
                                                        <Tooltip anchorSelect="#clickable" className="z-50 bg-white shadow-lg rounded-lg p-4 flex flex-col " clickable>
                                                            <button
                                                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition text-center border-b text-purple-400 border-b-purple-950"
                                                            >
                                                                <span className="w-full mx-auto">{user?.displayName}</span>
                                                            </button>

                                                            <Link to={"/"}
                                                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                                            >
                                                                <FaUserCircle size={18} />
                                                                <span>My Profile</span>
                                                            </Link>
                                                            <Link to={"/my-bookings"}
                                                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                                            >
                                                                <MdOutlinePlaylistAdd size={18} />
                                                                <span>My Bookings</span>
                                                            </Link>

                                                            {
                                                                user?.email === "akwebdev69@gmail.com" ? <Link to={"/admin-pannel"}
                                                                    className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                                                >
                                                                    <GrUserAdmin size={18} />
                                                                    <span>Admin Pannel</span>
                                                                </Link> : ""
                                                            }
                                                            <Link
                                                                onClick={hanldeLogout}
                                                                className="flex items-center space-x-2 hover:text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
                                                            >
                                                                <FiLogOut size={18} />
                                                                <span>Logout  </span>
                                                            </Link>
                                                        </Tooltip>
                                                    </div>

                                                </div>

                                            </div>
                                            :
                                            <div className="">
                                                <div className="flex items-center gap-1 md:gap-4">
                                                    <Link
                                                        className="md:px-3 py-1 btn btn-sm rounded-md border border-indigo-800 hover:bg-indigo-700 hover:text-white"
                                                        to={"/login"}
                                                    >
                                                        Login
                                                    </Link>
                                                    <Link
                                                        className="md:px-3 btn btn-sm py-1 rounded-md border border-indigo-800 bg-indigo-700 text-white hover:bg-indigo-800"
                                                        to={"/register"}
                                                    >
                                                        Register
                                                    </Link>
                                                </div>
                                            </div>
                                    }

                                </div>
                        }
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.25 }}
                            onClick={() => setMenu(!menu)} className="text-2xl lg:hidden size-10 rounded-md flex justify-center items-center border border-purple-900 font-bold">
                            {
                                !menu ? <GiHamburgerMenu /> : <RxCross2 />
                            }
                        </motion.div>
                        {/* Theme */}
                        <div></div>
                    </div>
                </div>
            </div>
            {/* mobile menu links */}
            <div className="lg:hidden">
                {
                    menu && <motion.div
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.25 }}
                        className="w-full bg-green-300 ">
                        <ul className="flex flex-col justify-center py-10 space-y-2 items-center gap-1">
                            <li>
                                <NavLink className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/rooms"}>Rooms</NavLink>
                            </li>
                            <li>
                                <NavLink className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/my-bookings"}>My Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/gallery"}>Gallery</NavLink>
                            </li>
                            <li>
                                <NavLink className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/about"}>About</NavLink>
                            </li>
                            {
                                user && user?.email ? <li onClick={hanldeLogout}>
                                    <Link className="px-3 py-2 rounded-md hover:bg-indigo-100" to={"/"}>Logout</Link>
                                </li> : ""
                            }
                        </ul>
                    </motion.div>
                }
            </div>
        </motion.div>
    );
};

export default Navbar;
