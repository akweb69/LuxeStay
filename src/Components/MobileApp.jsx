import mm from "../assets/Logo/app.png"
import { FcOk } from "react-icons/fc";
import qr from "../assets/Logo/QR_code_for_mobile_English_Wikipedia.svg"
import gtt from "../assets/Logo/gggg-removebg-preview.png"
import HeadingTitle from "../Utils/HeadingTitle";
const MobileApp = () => {
    return (
        <div className="w-full bg-gradient-to-t to-gray-200 from-gray-200 via-orange-200 flex items-center justify-center flex-col">
            <HeadingTitle one={"Mobile App"} two={"Stay connected on the go – luxury and convenience right at your fingertips"}></HeadingTitle>
            <div className="w-11/12 mx-auto lg:grid flex flex-col-reverse lg:grid-cols-2 items-center justify-center lg:gap-10" >
                <div className="flex justify-center  w-full py-5  bg-bbb bg-cover bg-center bg-no-repeat bg-[rgba(0,0,0,0.4)] bg-blend-overlay rounded-xl ">
                    <img className="max-h-[650px] w-1/2 " src={mm} alt="" />
                </div>
                <div className="space-y-3">
                    <h1 className="pb-5 text-2xl md:text-4xl font-bold font-font1 text-green-950">Unlock exclusive features available only on the Wego App. Download it now!</h1>
                    <p className="flex gap-2 items-center  "><span className="text-green-500 text-2xl md:text-4xl"><FcOk />
                    </span>Enjoy more than ten practical features tailored exclusively for app users.</p>
                    <p className="flex gap-2 items-center  "><span className="text-green-500 text-2xl md:text-4xl"><FcOk />
                    </span>Discover our Explore page for Popular Destinations, Weekend Getaways, Travel News, and more.</p>
                    <p className="flex gap-2 items-center  "><span className="text-green-500 text-2xl md:text-4xl"><FcOk />
                    </span>Swift checkout process on the Wego app with offline booking access, various discounts, and password-less logins.</p>
                    <div className="mt-5 flex gap-5 items-center flex-col md:flex-row">
                        <div className=""><img src={qr} alt="" /></div>
                        <div className="max-w-[200px]"><img className="w-full" src={gtt} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileApp;