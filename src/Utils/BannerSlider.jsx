import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";




const BannerSlider = ({ data }) => {
    const { title, subTitle } = data;
    return (
        <div className={`w-full h-[66vh] flex justify-center items-center bg-transparent`}>
            <div className="md:p-20 p-4">
                {/* Title Section */}
                <div className="md:max-w-[75%] mx-auto ">
                    <h1 className="text-center text-3xl py-5 md:text-5xl lg:text-7xl font-bold font-font2_nato text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
                        {title}
                    </h1>
                </div>
                {/* Subtitle Section */}
                <div className="md:max-w-[60%] mx-auto pb-5">
                    <p className="text-sm md:text-base text-center text-gray-300 font-font2_nato bg-clip-text">
                        {subTitle}
                    </p>
                </div>
                <div className="mx-auto w-fit">
                    <Link to={"/rooms"}
                        className="group relative flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <span className="relative z-10">Book Now</span>
                        <FaArrowRight
                            className="ml-2 text-white transition-all transform group-hover:translate-x-2 group-hover:scale-110"
                            size={20}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-lg blur-lg opacity-70 group-hover:opacity-100"></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;
