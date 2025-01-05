import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Common/HomePage";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Rooms from "../Components/Rooms";
import RoomDetails from "../Components/RoomDetails";
import MyBooking from "../Pages/MyBooking";
import Error404page from "../Pages/Error404page";
import Gallery from "../Pages/Gallery";
import About from "../Components/About";
import PrivateRout from "./PrivateRout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>
            },
            {
                path: '/room/:id',
                element: <RoomDetails></RoomDetails>
            },
            {
                path: "/my-bookings",
                element: <PrivateRout><MyBooking></MyBooking></PrivateRout>
            }
            ,
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    },
    {
        path: "*",
        element: <Error404page></Error404page>
    }
])

export default router;