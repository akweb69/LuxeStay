import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_PREFIX,
    withCredentials: true,
})
const useKalamSecure = () => {
    const { hanldeLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(
            res => {
                return res
            },
            async error => {
                console.log("The chor is cought !", error.response)

                if (error.response.status === 401 || error.response.status === 403) {
                    // logout
                    hanldeLogout()
                    // naviaget login page
                    navigate("/login")
                }
            }
        )
    }, [navigate, hanldeLogout])
    return axiosSecure

}
export default useKalamSecure