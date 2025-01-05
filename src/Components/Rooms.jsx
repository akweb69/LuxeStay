import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "../Utils/RoomCard";
import Loading from "../Common/Loading";
import { motion } from "motion/react"
import { Helmet } from "react-helmet";
const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // ${import.meta.env.VITE_API_PREFIX}
        axios.get(`${import.meta.env.VITE_API_PREFIX}/rooms`)
            .then(data => {
                setRooms(data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleFilter = (e) => {
        e.preventDefault()
        setLoading(true)
        const form = new FormData(e.target);
        const startValue = parseFloat(form.get("from_price")) || 1
        const endValue = parseFloat(form.get("end_price")) || 100000

        axios.get(`${import.meta.env.VITE_API_PREFIX}/sorting-room?st=${startValue}&end=${endValue}`)
            .then((res) => {
                const filterRoom = res.data;
                setRooms(filterRoom)
                e.target.reset()
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div className="w-full py-10">
            <Helmet>
                <title> Rooms | LuxeStay </title>
            </Helmet>
            {
                loading ? <Loading></Loading> : <div className="w-11/12 mx-auto">
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-center md:text-start text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text w-fit">
                        All Rooms
                    </motion.h1>
                    {/* filtering by prices ranges */}
                    <div className="w-full pt-4">
                        <motion.form
                            inherit={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            onSubmit={handleFilter}
                            className="flex justify-end gap-4 w-full items-center">
                            <input className="input input-accent w-full md:w-fit " type="number" name="from_price" id="" placeholder="From BDT" />
                            <input className="input input-accent w-full md:w-fit " type="number" name="end_price" id="" placeholder="To BDT" />
                            <button className="btn btn-accent">Filter</button>
                        </motion.form>

                    </div>

                    <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-5 items-center">
                        {rooms?.map(room => <RoomCard key={room._id} room={room}></RoomCard>)}
                    </div>
                </div>
            }


        </div>
    );
};

export default Rooms;