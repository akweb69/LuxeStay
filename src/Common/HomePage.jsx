import { useEffect, useState } from "react";
import About from "../Components/About";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import FeatureRooms from "../Components/FeatureRooms";
import HowItWorks from "../Components/HowItWorks";
import LuxeStayBenefits from "../Components/LuxeStayBenefits";
import Map from "../Components/Map";
import NewsLetter from "../Components/NewsLetter";
import SpecialOffers from "../Components/SpecialOffers";
import Testimonials from "../Components/Testimonials";
import Why from "../Components/Why";
import Faq from "../Pages/Faq";
import OfferCard from "../Utils/OfferCard";
import imggg from "../assets/add/add.webp"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import VideoSection from "../Components/VideoSection";
import MobileApp from "../Components/MobileApp";
const HomePage = () => {
    const [openOffer, setOpenOffer] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setOpenOffer(true)
        }, 700);

        setTimeout(() => {
            setOpenOffer(false)
        }, 15000);
    }, [])


    return (
        <div className="min-h-screen">
            <Helmet>
                <title>  LuxeStay  </title>
            </Helmet>
            <Banner></Banner>
            <div className="">
                {
                    openOffer && <div className="w-full min-h-screen flex justify-center items-center fixed top-0 z-50">
                        <div className=" bg-gradient-to-tr from-orange-600 to-pink-600  w-10/12 mx-auto md:w-7/12 rounded-xl relative">
                            <div onClick={() => setOpenOffer(false)} className="bg-white cursor-pointer size-9 rounded-l-badge flex items-center justify-center absolute right-0 top-0 text-red-600">X</div>
                            <Link to={"/rooms"} className="w-full">
                                <img className="w-full h-full rounded-xl" src={imggg} alt="" />
                            </Link>
                        </div>
                    </div>
                }
            </div>
            <FeatureRooms></FeatureRooms>
            <Map></Map>
            <SpecialOffers></SpecialOffers>
            <Testimonials></Testimonials>
            <HowItWorks></HowItWorks>
            <VideoSection></VideoSection>
            <MobileApp></MobileApp>
            <Why></Why>
            <About></About>
            <ContactUs></ContactUs>
            <Faq></Faq>
            <div className="md:block hidden">
                <OfferCard></OfferCard>
            </div>
            <LuxeStayBenefits></LuxeStayBenefits>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default HomePage;