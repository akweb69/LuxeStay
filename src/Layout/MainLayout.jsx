import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const MainLayout = () => {
    return (
        <div>

            <Toaster />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;