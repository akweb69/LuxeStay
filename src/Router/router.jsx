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
import ContactUs from "../Components/ContactUs";


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
                element: <PrivateRout><Rooms></Rooms></PrivateRout>
            },
            {
                path: '/room/:id',
                element: <RoomDetails></RoomDetails>
            },
            {
                path: "/my-bookings",
                element: <PrivateRout><MyBooking></MyBooking></PrivateRout>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
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