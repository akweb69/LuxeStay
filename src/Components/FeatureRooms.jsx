import axios from "axios";
import { useEffect, useState } from "react";
import FeatureCard from "../Utils/FeatureCard";
import HeadingTitle from "../Utils/HeadingTitle";

const FeatureRooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_PREFIX}/top-rated-rooms`)
            .then(res => {
                console.log(res.data)
                setRooms(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div className="w-full   bg-gradient-to-t from-indigo-50  to-white">
            <div className="w-11/12 mx-auto">
                <HeadingTitle one={"Feature Rooms"} two={"Experience the finest stays handpicked for your ultimate comfort and luxury. These top-rated rooms are loved by our guests for their unmatched ambiance and amenities. Discover your perfect escape today!"}></HeadingTitle>

                <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                    {
                        rooms?.map((r, idx) => <FeatureCard key={idx} r={r}></FeatureCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureRooms;