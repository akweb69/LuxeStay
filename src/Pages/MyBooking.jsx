import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ScrollToTop from '../Utils/ScrollToTop';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthContext/AuthProvider';
import { FaGear, FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { differenceInCalendarDays, format } from 'date-fns';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { LuTableOfContents } from "react-icons/lu";
import useKalamSecure from '../Hooks/useAxiosSecure';


const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updateModal, setUpdateModal] = useState(false)
    const [bookingDate, setBookingDate] = useState(format((new Date()), "yyyy-MM-dd"))
    const [reviewModal, setReviewModal] = useState(false)
    const [checkedIndex, setCheckedIndex] = useState(null);
    const [comment, setComment] = useState(" ")
    const [table, setTable] = useState(true);
    const axiosSecure = useKalamSecure();
    useEffect(() => {
        axiosSecure.get(`/my-bookings/${user?.email}`)
            .then(res => {
                const data = res.data;
                setBookings(data);
            })
            .catch(err => {
                console.log(err);
            });
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [user?.email]);
    // ! cancel btn functionnality start
    const handleCancel = (bookId, room_id, booking_date) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Close",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const dayCheck = differenceInCalendarDays(
                    booking_date, new Date()
                )
                if (dayCheck < 2) {
                    toast.error("Cancel at least 1 day before of your booking days")
                    return;
                }


                axios.delete(`${import.meta.env.VITE_API_PREFIX}/cancel-booking/${bookId}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            axios.patch(`${import.meta.env.VITE_API_PREFIX}/update-after-cancel/${room_id}`)
                                .then(res => {
                                    console.log(res.data)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                            axiosSecure.get(`/my-bookings/${user?.email}`)
                                .then(res => {
                                    setBookings(res.data);
                                })
                                .catch(err => console.log(err));
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your Booking Has Canceled!",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err));
            }
        });
    };
    // ! cancel btn functionnality end
    // ! Update btn functionnality start
    const [book_id, setBook_id] = useState("")
    const handleUpdate = (bookId, email) => {
        setUpdateModal(true)
        setBook_id(bookId)
    }
    const confirmUpdateBtn = () => {
        console.log(book_id)
        const bookingDate2 = { bookingDate: bookingDate }
        console.log(bookingDate)
        axios.patch(`${import.meta.env.VITE_API_PREFIX}/update-booking-date/${book_id}`, bookingDate2)
            .then((res) => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    setUpdateModal(false)
                    toast.success("Booking Date Update Successful!")
                    axiosSecure.get(`/my-bookings/${user?.email}`)
                        .then(res => {
                            const data = res.data;
                            setBookings(data);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                }
                if (res.data === "date already booked!") {

                    toast.error("This Date is Not Available! Already Booked Someone Chose Another Date")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    // review btn 
    const [post_id, setPost_id] = useState("")
    const handleReviewbtn = (id) => {
        setReviewModal(true)
        setPost_id(id)
    }
    const handlePostComment = () => {
        console.log(post_id)
        // console.log(typeo(checkedIndex + 1), comment)
        const reviewTime = format(new Date(), "yyyy-MM-dd");
        const rating = checkedIndex + 1
        const room_id = post_id
        // ! check    rating
        if (checkedIndex === null) {
            return toast.error("Please give a rating!")
        }
        // ! check coment 
        const checking = comment.split(" ").length;
        if (checking < 5) {
            return toast.error("Comment at least 5 words!")
        }
        const reviewData = { reviewTime, rating, comment, user, room_id }

        axios.post(`${import.meta.env.VITE_API_PREFIX}/reviews?room_id=${room_id}`, reviewData)
            .then(res => {
                toast.success("Post Your review on this room!")
                console.log(res.data)
                setReviewModal(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='w-full min-h-[90vh]'>
            <Helmet>
                <title> My Bookings | LuxeStay </title>
            </Helmet>
            {/* review modal */}
            {
                reviewModal && <div className="w-full fixed top-0 min-h-screen flex justify-center items-center backdrop-blur-sm bg-[rgba(0,0,0,0.3)] z-50">
                    <div className="w-11/12 mx-auto md:w-7/12 p-5 rounded-lg bg-white ">
                        <div className="px-4     py-5 md:grid grid-cols-3 items-center gap-5">
                            <div className="w-full h-full flex justify-center flex-col items-center col-span-1 border-b-2 md:border-b-0 md:border-r-2 border-orange-500">
                                <img className='max-w-20 rounded-full avatar' src={user?.photoURL} alt="" />
                                <h1 className="py-2 text-xl md:text-2xl font-bold font-font1 text-orange-500">{user?.displayName}</h1>
                            </div>

                            <div className="col-span-2  ">
                                <h1 className="py-2 text-xl md:text-2xl font-bold font-font1 text-orange-800">Give Review</h1>
                                {/* give your rating */}
                                <div className="flex flex-col items-start gap-4 p-6 border rounded shadow-md">
                                    {[...Array(5)].map((_, index) => (
                                        <label
                                            key={index}
                                            className="flex items-center gap-2 cursor-pointer text-lg"
                                        >
                                            <input
                                                required
                                                type="checkbox"
                                                checked={checkedIndex === index}
                                                onChange={() => setCheckedIndex(index === checkedIndex ? null : index)}
                                                className="w-5 h-5 cursor-pointer"
                                            />
                                            <div className="flex">
                                                {[...Array(index + 1)].map((_, starIndex) => (
                                                    <FaStar key={starIndex} className="text-yellow-500" />
                                                ))}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                {/* cooment */}
                                <div className="flex flex-col gap-2  pt-5">
                                    <textarea
                                        required
                                        onChange={(e) => setComment(e.target.value)}
                                        id="comment"
                                        rows="4"
                                        className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Write your comment here..."
                                    ></textarea>
                                </div>
                                <div className="w-full pt-5">

                                    <div
                                        onClick={() => handlePostComment()}
                                        className="btn btn-error btn-sm w-full">Post Review</div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            }
            {/* update modal */}
            {
                updateModal && <div className="w-full fixed top-0 min-h-screen flex justify-center items-center backdrop-blur-sm bg-[rgba(0,0,0,0.3)] z-50">
                    <div className="w-11/12 mx-auto md:w-6/12 p-5 rounded-lg bg-white ">
                        <div className="px-4">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
                                className="text-7xl md:text-[120px] w-fit mx-auto pb-2 mb-5 text-orange-400">
                                <FaGear></FaGear>
                            </motion.div>
                            <div className="text-2xl md:text-4xl pb-6 font-semibold text-orange-600 font-font2_nato text-center">Update Booking Date</div>
                            <div className="pb-10">
                                <input onChange={(e) => setBookingDate(e.target.value)} defaultValue={format((new Date()), "yyyy-MM-dd")} className='w-full input      input-error' type="date" name="" id="" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 md:gap-4 items-center w-full">
                            <div onClick={() => setUpdateModal(false)} className="btn btn-success btn-sm w-full">Close</div>
                            <div onClick={confirmUpdateBtn} className="btn btn-error btn-sm w-full">Confirm</div>
                        </div>
                    </div>
                </div>
            }
            {/* update modal */}
            <ScrollToTop />
            {
                loading ? <div className="flex flex-col items-center justify-center h-screen bg-white">
                    Please Wait...
                </div> :
                    <div className="w-11/12 mx-auto py-10">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl md:text-4xl font-semibold flex items-center text-orange-600">
                                My Bookings
                                <span className="text-xs p-1 px-3 rounded-full bg-orange-200">
                                    {bookings?.length} Bookings
                                </span>
                            </h1>
                            <div className="flex gap-2 text-xl md:text-3xl ">
                                <div onClick={() => setTable(true)} className="hover:p-1 hover:bg-indigo-200 rounded-md"><LuTableOfContents className='text-orange-600 cursor-pointer ' ></LuTableOfContents></div>
                                <div onClick={() => setTable(false)} className="hover:p-1 hover:bg-indigo-200 rounded-md"><RiLayoutGrid2Fill className='text-indigo-700 cursor-pointer ' ></RiLayoutGrid2Fill></div>
                            </div>
                        </div>
                        <div className="">
                            {
                                table ? <div className="w-full mx-auto overflow-x-auto py-10">
                                    <table className='border border-orange-600 w-full table rounded-md'>
                                        <thead>
                                            <tr className='w-full border-orange-800 text-center text-orange-400 font-semibold bg-orange-50'>
                                                <th>SL</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                                <th>Booking Date</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                bookings?.map((book, idx) => (
                                                    <tr key={book?._id} className='w-full border-orange-400 text-center'>
                                                        <td>{idx < 10 ? "0" + (idx + 1) : (idx + 1)}</td>
                                                        <td>
                                                            <img className='w-20 h-10' src={book?.room?.images?.img_1} alt="" />
                                                        </td>
                                                        <td>{book?.room?.name}</td>
                                                        <td>{book?.room?.description.slice(0, 30)}...</td>
                                                        <td>{book?.room?.price} BDT</td>
                                                        <td>{book?.bookingDate}</td>
                                                        <td>
                                                            <div className="lg:flex flex-wrap  space-y-2 justify-center gap-3 items-center">
                                                                <div
                                                                    onClick={() => handleUpdate(book?._id, book?.email)}
                                                                    className="btn btn-sm btn-error">Update Date</div>
                                                                <div
                                                                    onClick={() => handleCancel(book?._id, book?.room_id, book?.bookingDate)}
                                                                    className="btn btn-sm btn-primary"
                                                                >
                                                                    Cancel
                                                                </div>
                                                                <div onClick={() => handleReviewbtn(book?.room_id)} className="btn btn-sm btn-accent">Give Review</div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div> :
                                    <div className="w-full   my-10 md:grid md:grid-cols-3 lg:grid-cols-4 items-center gap-5 space-y-5 md:space-y-0 ">
                                        {
                                            bookings?.map((bb, idx) => <div key={idx} className="w-full p-[2px] border border-orange-200 rounded-lg">
                                                <div className="h-[120px] w-full "><img className='w-full rounded-lg h-full' src={bb?.room?.images?.img_1} alt="" /></div>
                                                <div className="p-4">
                                                    <h1 className="text-xl md:text-2xl font-bold font-font1 text-orange-500"> Name: {bb?.room?.name}</h1>
                                                    <p className='text-xs md:text-sm text-orange-400'> <b>DescripTion:</b> {bb?.room?.description.slice(0, 60)}...</p>
                                                    <p className='text-lg text-red-700'><b>Price: </b> {bb?.room?.price} BDT</p>
                                                    <p className='text-orange-950'><b>Book Date: </b> {bb?.bookingDate}</p>
                                                    <div className="w-full space-y-2 mt-5">
                                                        <div
                                                            onClick={() => handleUpdate(bb?._id, bb?.email)}
                                                            className="btn w-full  btn-sm btn-error">Update Date</div>
                                                        <div
                                                            onClick={() => handleCancel(bb?._id, bb?.room_id, bb?.bookingDate)}
                                                            className="btn  w-full btn-sm btn-primary"
                                                        >
                                                            Cancel
                                                        </div>
                                                        <div onClick={() => handleReviewbtn(bb?.room_id)} className="btn w-full  btn-sm btn-accent">Give Review</div>
                                                    </div>

                                                </div>

                                            </div>)
                                        }

                                    </div>
                            }
                        </div>
                    </div>

            }
        </div>
    );
};

export default MyBooking;
