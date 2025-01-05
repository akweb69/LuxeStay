import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/Images/hotel-receptionist-work.jpg"
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import ScrollToTop from "../Utils/ScrollToTop";
import { motion } from "motion/react"
const Login = () => {
    const navigate = useNavigate()

    const { createUserWithGoogle, loginWithEmailPassword, setLoading } = useContext(AuthContext)
    const handleGoogleLoginBtn = () => {
        createUserWithGoogle()
            .then(res => {
                console.log(res.user)
                toast.success("Google login suceess!")
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        const regData = { email, password }
        console.table(regData)

        loginWithEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success("Login success!")
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                toast.error("User or Password is not correct!")
                setLoading(false)

            })
    }


    return (
        <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className=" w-11/12 lg:w-7/12 mx-auto lg:grid grid-cols-12 items-center py-10 md:py-20">
            <ScrollToTop></ScrollToTop>
            <Helmet>
                <title> Login | LuxeStay </title>
            </Helmet>
            {/* img section */}
            <div className="col-span-6 w-full h-full">
                <img src={logoImg} className="w-full h-[250px] lg:h-full object-cover" alt="" />
            </div>
            {/* form section */}
            <div className="col-span-6 w-full border h-full p-10">
                <div className="pb-10">
                    <h1 className="text-2xl md:text-4xl font-semibold  font-font2_nato">Login</h1>
                </div>
                <div
                    onClick={handleGoogleLoginBtn}
                    className="flex items-center justify-center gap-1 p-2 border border-purple-200 rounded-lg cursor-pointer hover:bg-base-200">
                    <span className="md:text-xl"><FcGoogle></FcGoogle></span>
                    <span className="md:text-lg font-semibold font-font2_nato">Login With Google</span>
                </div>

                <div className="divider">OR</div>
                <form
                    onSubmit={handleFormSubmit}
                    className="space-y-4" >
                    <div className="flex flex-col justify-center text-lg font-font2_nato w-full">
                        <label htmlFor="email">Emali</label>
                        <input required className="input input-bordered" type="email" name="email" />
                    </div>
                    <div className="flex flex-col justify-center text-lg font-font2_nato w-full">
                        <label htmlFor="password">Password</label>
                        <input required className="input input-bordered " type="password" name="password" />
                    </div>
                    <button className="w-full text-center btn btn-accent text-white text-lg font-font2_nato">
                        Login
                    </button>
                    <div className="">
                        <p className="text-xs md:text-sm hover:underline cursor-pointer">Fotget Password</p>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <h4 className="text-sm md:text-base">
                            Don't Have An Acoount!
                        </h4>
                        <Link to={"/register"} className="text-indigo-500 cursor-pointer hover:underline ">
                            Register
                        </Link>
                    </div>

                </form>
            </div>

        </motion.div>
    );
};

export default Login;