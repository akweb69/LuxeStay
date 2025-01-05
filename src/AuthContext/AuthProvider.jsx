import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../Auth/Firebase";
import axios from "axios";


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    console.log(user)
    // ! email password login and register
    const createUserWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginWithEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // ! sign in/up with google
    const createUserWithGoogle = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
    // ! logout 
    const hanldeLogout = () => {
        setLoading(true)
        return signOut(auth);
    }


    // ! data object                
    const dataObj = {
        createUserWithEmailPassword,
        loginWithEmailPassword,
        createUserWithGoogle,
        hanldeLogout,
        loading,
        setLoading,
        setUser,
        user,
        darkMode,
        setDarkMode
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setLoading(true);
            if (currentUser?.email) {
                setUser(currentUser);
                await axios.post(`${import.meta.env.VITE_API_PREFIX}/jwt`, { email: currentUser?.email }, { withCredentials: true })
                    .then(re => {
                        console.log(re.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            else {
                setUser(null);
                await axios.get(`${import.meta.env.VITE_API_PREFIX}/logout`, { withCredentials: true })
                    .then(re => {
                        console.log(re.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    return (
        <AuthContext.Provider value={dataObj}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;