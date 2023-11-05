import auth from "../Firebase-config";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const Authcontext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [waitForUser, setWaitForUser] = useState(true)


    const googleAuthentication = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        const unsubcribe = () => {
            onAuthStateChanged(auth, USER => {
                setUser(USER)
                setLoading(false)
            })
        }

        return () => {
            unsubcribe()
        }

    }, [waitForUser])
    const items = {
        loading,
        googleAuthentication,
        setWaitForUser,
        user
    }



    return (
        <Authcontext.Provider value={items}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;