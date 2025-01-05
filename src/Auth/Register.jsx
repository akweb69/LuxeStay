import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/Images/hotel-receptionist-work.jpg"
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "./Firebase";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import ScrollToTop from "../Utils/ScrollToTop";
import { motion } from "motion/react"
const Register = () => {
    const [passErr, setPassErr] = useState("")
    const { createUserWithEmailPassword, setLoading, createUserWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault();
        setPassErr("")
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")
        const photo = form.get("photo")
        const regData = { name, email, photo, password }
        console.table(regData)

        // pasword verification
        // At least one uppercase letter
        const hasUppercase = /[A-Z]/;
        // At least one lowercase letter
        const hasLowercase = /[a-z]/;
        // At least one special character
        const hasSpecialChar = /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        // At least one number
        const hasNumber = /[0-9]/;
        // checking password
        if (password.length < 6) {
            setPassErr("Password must be six character!")
            return;
        }
        if (!hasNumber.test(password)) {
            setPassErr("Password must have at least one number !")
            return;
        }
        if (!hasUppercase.test(password)) {
            setPassErr("Password must have at least one Uppercase Char  !")
            return;
        }
        if (!hasLowercase.test(password)) {
            setPassErr("Password must have at least one lowercase Char  !")
            return;
        }
        if (!hasSpecialChar.test(password)) {
            setPassErr("Password must have at least one Spacial Char  !")
            return;
        }
        // pasword verification done
        // ! create user with email and pasword
        createUserWithEmailPassword(email, password)
            .then(result => {
                // !Update user name and photo url
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(result => {
                        console.log("success")
                        toast.success("Successfully create your account!")
                        navigate("/")
                    })
                    .catch(err => {
                        console.log("the user allready exits")
                        setLoading(false)
                    })
            })
            .catch(err => {
                console.log("the user allready exits")
                toast.error("Your email allready exist! try another one.")
                setLoading(false)
            })



    }
    const handleGoogleLogin = () => {
        createUserWithGoogle()
            .then(res => {
                toast.success("Successfully create your account!")
                navigate("/")
            })
            .catch(err => {
                toast.error("Something went wrong please try again leter!.")
                setLoading(false)
            })

    }
    return (
        <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className=" w-11/12 lg:w-8/12 mx-auto lg:grid grid-cols-12 items-center py-10 md:py-20">
            <ScrollToTop></ScrollToTop>
            <Helmet>
                <title> Register | LuxeStay </title>
            </Helmet>
            {/* form section */}
            <div className="col-span-6 w-full border h-full p-10">
                <div className="pb-10">
                    <h1 className="text-2xl md:text-4xl font-semibold  font-font2_nato">Register</h1>
                </div>
                <div
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center gap-1 p-2 border border-purple-200 rounded-lg cursor-pointer hover:bg-base-200">
                    <span className="md:text-xl"><FcGoogle></FcGoogle></span>
                    <span className="md:text-lg font-semibold font-font2_nato">Register With Google</span>
                </div>
                <div className="divider">OR</div>
                <form
                    onSubmit={handleFormSubmit}
                    className="space-y-4" >
                    <div className="flex flex-col justify-center text-lg font-font2_nato w-full">
                        <label htmlFor="name">Name</label>
                        <input required className="input input-bordered" type="text" name="name" />
                    </div>

                    <div className="flex flex-col justify-center text-lg font-font2_nato w-full">
                        <label htmlFor="photo">Photo URL</label>
                        <input required className="input input-bordered" type="url" name="photo" />
                    </div>

                    <div className="flex flex-col justify-center text-lg font-font2_nato w-full">
                        <label htmlFor="email">Emali</label>
                        <input required className="input input-bordered" type="email" name="email" />
                    </div>
                    <div className="flex flex-col justify-center text-lg font-font2_nato w-full">
                        <label htmlFor="password">Password</label>
                        <input required className="input input-bordered " type="password" name="password" />
                    </div>
                    <div className="Text-xs text-red-500">
                        {passErr}
                    </div>
                    <button className="w-full text-center btn btn-accent text-white text-lg font-font2_nato">
                        Login
                    </button>

                    <div className="flex justify-center items-center gap-1">
                        <h4 className="text-sm md:text-base">
                            Allready Have An Acoount!
                        </h4>
                        <Link to={"/login"} className="text-indigo-500 cursor-pointer hover:underline ">
                            Login
                        </Link>
                    </div>

                </form>
            </div>
            {/* img section */}
            <div className="col-span-6 w-full h-full">
                <img src={logoImg} className="w-full  h-[250px] lg:h-full object-cover" alt="" />
            </div>

        </motion.div>
    );
};

export default Register;