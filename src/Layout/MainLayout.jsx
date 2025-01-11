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
            <div className="min-h-screen">
                <Outlet ></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;