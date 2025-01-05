import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaWifi,
    FaBath,
    FaSwimmingPool,
    FaConciergeBell,
    FaGlassCheers,
    FaTv,
    FaUtensils,
    FaDoorOpen,
    FaBed,
    FaUserFriends,
    FaArrowRight,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";
import Loading from "../Common/Loading";
import ScrollToTop from "../Utils/ScrollToTop";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../AuthContext/AuthProvider";
import ReactRating from "react-rating";
import { format } from "date-fns";
import { BiSolidError } from "react-icons/bi";
import toast from "react-hot-toast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaClipboardList } from "react-icons/fa";



const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [loading, setLoading] = useState(true);
    const [featuredImage, setFeaturedImage] = useState("");
    const { user } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false)
    const [bookingDate, setBookingDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [unvailable, setUnavailable] = useState(false)
    const [suc, setSuc] = useState(false)
    const [how, setHow] = useState(false)
    const steps = [
        {
            id: 1,
            text: "Choose any room you want",
            icon: <FaDoorOpen className="text-blue-500 text-2xl mt-1" />,
        },
        {
            id: 2,
            text: "Go to My Booking section",
            icon: <FaClipboardList className="text-green-500 text-2xl mt-1" />,
        },
        {
            id: 3,
            text: "Click the Give Review button and open a modal, then you can post your review",
            icon: <FaStar className="text-yellow-500 text-7xl md:text-3xl mt-1" />,
        },
    ];


    const navigate = useNavigate()
    if (suc) {
        navigate("/my-bookings")
    }
    var settings = {

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_API_PREFIX}/room/${id}`)
            .then((res) => {
                setRoom(res.data);
                setFeaturedImage(res.data.images?.img_1);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    // desturcture the rooms data 
    const {

        name,
        price,
        description,
        details,
        category,
        room_size,
        max_occupancy,
        bed_type,
        cancellation_policy,
        booking_deadline,
        payment_methods,
        amenities,
        room_type,
        policies,
        images,
        facilities,
        reviews,
        rating,
        availability,
        terms_and_conditions,
    } = room;

    // Map icons for amenities
    const amenityIcons = {
        WiFi: FaWifi,
        Jacuzzi: FaBath,
        "Air Conditioning": FaConciergeBell,
        Pool: FaSwimmingPool,
        Champagne: FaGlassCheers,
        TV: FaTv,
        Dining: FaUtensils,
        Balcony: FaDoorOpen,
        "King-sized bed": FaBed,
        Occupancy: FaUserFriends,
    };
    const bookingData = { bookingDate, email: user?.email, room_id: id, room }
    console.log(bookingData)
    const handleOpenModal = () => {
        if (!user && !user?.email) {
            navigate("/login")
            return;
        }

        if (availability === "Unavailable") {
            toast.error("The  room is not available !")
        }

        else {
            setOpenModal(true)
        }
    }

    const handleCofirmBookingBtn = () => {
        if (availability === "Available") {
            axios.post(`${import.meta.env.VITE_API_PREFIX}/new-booking`, bookingData)
                .then(res => {
                    if (res.data.acknowledged) {
                        // ! update the availability for this room
                        axios.patch(`${import.meta.env.VITE_API_PREFIX}/update-status/${id}`)
                            .then(res => {
                                console.log(res.data)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                        toast.success("Successfully Booked!")
                        setSuc(true)
                    }

                })
                .catch(err => {
                    console.log(err)
                })

        }
        else {
            setOpenModal(false)
            setUnavailable(true)

        }
    }
    // set default value of  booking date
    const date = new Date();
    const dDate = format(date, 'yyyy-MM-dd')
    console.log(bookingDate)

    // ! getting the reviews data
    const [allreviews, setAllReviews] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_PREFIX}/all-reviews/${id}`)
            .then(res => {
                console.log(res.data)
                setAllReviews(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="min-h-[90vh]">
            <ScrollToTop />
            {loading ? (
                <Loading />
            ) : (
                <motion.div
                    className="w-11/12 mx-auto   py-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Room Name */}
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold text-center mb-8"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {name}
                    </motion.h1>

                    {/* Image Gallery */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8 "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {/* Featured Image */}
                        <div className="col-span-1 md:col-span-8">
                            <img
                                src={featuredImage}
                                alt="Room"
                                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="col-span-1 md:col-span-4 grid grid-cols-3 gap-2">
                            {images &&
                                Object.values(images).map((img, idx) => (
                                    <motion.img
                                        key={idx}
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className={`w-full h-[100px] object-cover rounded-lg cursor-pointer ${img === featuredImage
                                            ? "border-2 border-blue-600"
                                            : "border border-gray-300"
                                            }`}
                                        onClick={() => setFeaturedImage(img)}
                                        whileHover={{ scale: 1.05 }}
                                    />
                                ))}
                        </div>
                    </motion.div>
                    {/* Rating Section */}
                    <motion.div
                        className="bg-gray-100 shadow-md rounded-lg p-6 mb-8 flex justify-between items-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Rating</h2>
                            <Rating
                                initialRating={rating || 0}
                                emptySymbol={<FaStar className="text-gray-300" />}
                                fullSymbol={<FaStar className="text-yellow-500" />}
                                readonly
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Reviews</h2>
                            <p className="text-lg">{reviews || 0} reviews</p>
                        </div>
                    </motion.div>
                    {/* reviews here */}
                    <div className="w-full mx-auto py-6 ">
                        {
                            allreviews.length === 0 ? <div className="w-full p-6 space-y-2 border rounded-xl ">
                                <h1 className="text-lg font-semibold font-font1">There are no reviews available...</h1>
                                <p className="">Add your review on this room go to your booking page and give review of your booking room</p>
                                <p onClick={() => setHow(true)} className="text-blue-400 underline cursor-pointer hover:text-blue-800">How to post my  review ? </p>
                                <Link to={"/my-bookings"} className="btn btn-primary">My Booking</Link>
                            </div> :
                                <Slider {...settings}>
                                    {
                                        allreviews?.map((r, idx) =>
                                            <div key={idx} className="" >
                                                <div className="border p-4 items-center  rounded-lg border-indigo-900 flex  gap-3 mx-4">
                                                    <div className="w-full grid grid-cols-6 items-center gap-4">
                                                        <div className="col-span-1 flex justify-center items-center">
                                                            <img referrerPolicy="no-referrer" className="rounded-full" src={r?.user.photoURL} alt="helo" />
                                                        </div>
                                                        <div className="col-span-5">
                                                            <h1 className="font-semibold">{r?.user.displayName}</h1>
                                                            <ReactRating
                                                                emptySymbol={<FaStar className="text-gray-400" />}
                                                                fullSymbol={<FaStar className="text-yellow-500" />}
                                                                initialRating={r?.rating}
                                                                readonly
                                                            />
                                                            <p className="text-xs ">
                                                                {r?.comment.slice(0, 130)}...
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    }
                                    {
                                        allreviews?.map((r, idx) =>
                                            <div key={idx} className="" >
                                                <div className="border p-4 items-center  rounded-lg border-indigo-900 flex  gap-3 mx-4">
                                                    <div className="w-full grid grid-cols-6 items-center gap-4">
                                                        <div className="col-span-1 flex justify-center items-center">
                                                            <img referrerPolicy="no-referrer" className="rounded-full" src={r?.user.photoURL} alt="helo" />
                                                        </div>
                                                        <div className="col-span-5">
                                                            <h1 className="font-semibold">{r?.user.displayName}</h1>
                                                            <ReactRating
                                                                emptySymbol={<FaStar className="text-gray-400" />}
                                                                fullSymbol={<FaStar className="text-yellow-500" />}
                                                                initialRating={r?.rating}
                                                                readonly
                                                            />
                                                            <p className="text-xs ">
                                                                {r?.comment.slice(0, 130)}...
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    }
                                    {
                                        allreviews?.map((r, idx) =>
                                            <div key={idx} className="" >
                                                <div className="border p-4 items-center  rounded-lg border-indigo-900 flex  gap-3 mx-4">
                                                    <div className="w-full grid grid-cols-6 items-center gap-4">
                                                        <div className="col-span-1 flex justify-center items-center">
                                                            <img referrerPolicy="no-referrer" className="rounded-full" src={r?.user.photoURL} alt="helo" />
                                                        </div>
                                                        <div className="col-span-5">
                                                            <h1 className="font-semibold">{r?.user.displayName}</h1>
                                                            <ReactRating
                                                                emptySymbol={<FaStar className="text-gray-400" />}
                                                                fullSymbol={<FaStar className="text-yellow-500" />}
                                                                initialRating={r?.rating}
                                                                readonly
                                                            />
                                                            <p className="text-xs ">
                                                                {r?.comment.slice(0, 130)}...
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    }
                                </Slider>
                        }
                    </div>
                    {/* Room Overview */}
                    <motion.div
                        className="bg-white shadow-md rounded-lg p-6 mb-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Room Overview</h2>
                        <p className="text-lg mb-4">{description}</p>
                        <p className="text-lg mb-2">
                            <strong>Details:</strong> {details}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Category:</strong> {category}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Room Size:</strong> {room_size}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Max Occupancy:</strong> {max_occupancy} people
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Bed Type:</strong> {bed_type}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Price:</strong> {price} BDT/night
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Availability:</strong>{" "}
                            {availability === "Available" ? (
                                <span className="text-green-600">Available</span>
                            ) : (
                                <span className="text-red-600">Not Available</span>
                            )}
                        </p>
                    </motion.div>

                    {/* Amenities */}
                    <motion.div
                        className="bg-gray-100 shadow-md rounded-lg p-6 mb-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {amenities?.map((amenity, idx) => {
                                const Icon = amenityIcons[amenity] || FaConciergeBell; // Default icon
                                return (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-3 text-lg text-gray-700 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <Icon className="text-blue-600 text-2xl" />
                                        {amenity}
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    {/* Facilities */}
                    <motion.div
                        className="bg-gray-100 shadow-md rounded-lg p-6 mb-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Facilities</h2>
                        <ul className="list-disc pl-5">
                            {facilities?.map((facility, idx) => (
                                <li key={idx} className="text-lg text-gray-700 mb-2">
                                    {facility}
                                </li>
                            ))}
                        </ul>
                    </motion.div>


                    {/* Additional Information */}
                    <motion.div
                        className="bg-white shadow-md rounded-lg p-6 mb-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
                        <p className="text-lg mb-2">
                            <strong>Cancellation Policy:</strong> {cancellation_policy}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Booking Deadline:</strong> {booking_deadline}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Payment Methods:</strong> {payment_methods?.join(", ")}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Policies:</strong> {policies?.join(", ")}
                        </p>
                        <p className="text-lg mb-2">
                            <strong>Terms & Conditions:</strong>
                        </p>
                        <ul className="list-disc pl-5">
                            {terms_and_conditions?.map((term, idx) => (
                                <li key={idx} className="text-lg text-gray-700 mb-2">
                                    {term}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    {/* add book now btn  */}
                    <div className="mx-auto w-fit py-10">
                        <button
                            onClick={handleOpenModal}
                            className="group relative flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                            <span className="relative z-10">Book Now</span>
                            <FaArrowRight
                                className="ml-2 text-white transition-all transform group-hover:translate-x-2 group-hover:scale-110"
                                size={20}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-lg blur-lg opacity-70 group-hover:opacity-100"></div>
                        </button>
                    </div>
                </motion.div>
            )}
            <div className="">
                {/* modal for how to review */}
                {
                    how && <div className="w-full min-h-screen flex justify-center items-center fixed top-0 backdrop-blur-sm bg-[rgba(0,0,0,0.3)]">
                        <div className="flex w-10/12 mx-auto flex-col items-center p-6 bg-white shadow-lg rounded-lg md:w-7/12">
                            {/* Title */}
                            <motion.h1
                                className="text-2xl font-bold text-gray-800 mb-6"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                How to Post Review
                            </motion.h1>

                            {/* Steps */}
                            <div className="space-y-4 w-full">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={step.id}
                                        className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                    >
                                        {/* Icon */}
                                        {step.icon}
                                        {/* Text */}
                                        <p className="text-gray-700 text-base">
                                            <span className="font-semibold">Step {step.id}: </span>
                                            {step.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                            <div onClick={() => setHow(false)} className="btn btn-error my-5">Ok</div>
                        </div>
                    </div>
                }
            </div>

            <div className="">
                {/* modal design akhan theke shuru */}
                {
                    openModal &&
                    <div className="w-full min-h-screen flex justify-center  items-center bg-[rgba(0,0,0,0.3)] backdrop-blur-sm fixed top-0">
                        <div className="w-10/12 mx-auto md:w-8/12 lg:w-6/12 p-6 rounded-lg bg-white">
                            <div className="">
                                <h1 className="text-xl md:text-2xl font-semibold text-green-700">
                                    Book Now! {name}
                                </h1>
                                <p className="text-xs md:text-sm pb-2">
                                    <b>Description: </b> {description}
                                </p>
                                <div className="">
                                    <b>Price: </b>{price} BDT/Night
                                </div>
                                <div className="">
                                    <b>Payment Methode: </b> {payment_methods}
                                </div>
                                <div className="flex w-full justify-between items-center pb-1">
                                    <div className="text-amber-500 flex items-center gap-2 ">
                                        Rating:
                                        <ReactRating
                                            emptySymbol={<FaStar className="text-gray-400" />}
                                            fullSymbol={<FaStar className="text-yellow-500" />}
                                            initialRating={rating}
                                            readonly
                                        />
                                    </div>
                                </div>
                                <div className="pb-2">
                                    <b>Payment Methode: </b> {payment_methods}
                                </div>
                                <div className="pb-2">
                                    <b>Availablity: </b> {availability}
                                </div>
                                {/* collect boking date  */}
                                <div className="mb-4">
                                    <label htmlFor="booking-date" className="block text-lg font-semibold mb-2">
                                        Select Booking Date:
                                    </label>
                                    <input onChange={(e) => setBookingDate(e.target.value)} className="w-full input-accent border p-2 rounded-lg" defaultValue={dDate} type="date" name="" id="" />
                                    {bookingDate && (
                                        <p className="mt-2 text-green-600">
                                            Selected Date: {format(new Date(bookingDate), "MMMM dd, yyyy")}
                                        </p>
                                    )}
                                </div>
                            </div>



                            {/* cancel and cofirm  btn */}
                            <div className="grid grid-cols-2 gap-4 items-center w-full">
                                {/* Cancel Button */}
                                <motion.div
                                    onClick={() => setOpenModal(false)}
                                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg cursor-pointer bg-red-600 text-white hover:text-red-600 hover:bg-white border-2 border-red-600 transition-all relative"
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 0 15px #ff4d4d",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaTimesCircle className="text-xl" />
                                    <span className="font-semibold">Cancel</span>
                                </motion.div>

                                {/* Confirm Button */}
                                <motion.div
                                    onClick={handleCofirmBookingBtn}
                                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg cursor-pointer bg-green-600 text-white hover:text-green-600 hover:bg-white border-2 border-green-600 transition-all relative"
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 0 15px #4caf50",
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaCheckCircle className="text-xl" />
                                    <span className="font-semibold">Confirm</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {/* error modal */}
            <div className="">
                {
                    unvailable && <div className="w-full min-h-screen flex justify-center items-center backdrop-blur-md bg-[rgba(0,0,0,0.2)] fixed top-0">
                        <div className="p-5 text-center w-11/12 mx-auto md:w-6/12 bg-white space-y-3 rounded-md">
                            <div className="text-7xl md:text-[200px] text-center text-amber-500 w-fit mx-auto">
                                <BiSolidError></BiSolidError>
                            </div>
                            <div className="text-2xl md:text-3xl font-semibold text-amber-500 capitalize">
                                This Room Is Not Available! On This Date.
                            </div>
                            <div className="md:text-xl font-semibold text-green-800">Please Check Another Room on this date</div>
                            <div className="divider">OR</div>
                            <Link to={`/room/${id}`}
                                onClick={() => setUnavailable(false)}
                                className="btn btn-accent"><span onClick={() => setOpenModal(true)} className="">Change The Date</span></Link>
                            <Link to={'/rooms'} className="btn btn-error">Check Available Room</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default RoomDetails;
