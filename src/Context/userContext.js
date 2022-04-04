import { Children, createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,
        updateProfile,
        onAuthStateChanged,
        signInWithEmailAndPassword,
        signOut,
        sendPasswordResetEmail
    }from "firebase/auth"
import { auth } from "../Config/Firebase/FirebaseSDK";
const UserContext = createContext({});

export const useUserContext=()=>useContext()

export const UserContextProvider = ({ children }) => {
    const [user,setUser]=useState();
    const [loading, setLoading]=useState();
    const [error,setError]=useState("");

    useEffect(()=>{
        setLoading(true)
      const unsubscribe = onAuthStateChanged(auth,response=>{
            response? setUser(response):setUser(null)
            setError("");
            setLoading(false);
        })
        return unsubscribe;
    },[])
    




    const logoutUser=()=>{
        signOut(auth);
    }

    const forgotPassword = (email)=>{
        return sendPasswordResetEmail(auth, email);
    }


    const contextValue={
        user,
        loading,
        error,
        //signInUser,
        //registerUser,
        logoutUser,
        forgotPassword,
    };


  return <UserContext.Provider value={contextValue}>{Children}</UserContext.Provider>;
};

export default UserContextProvider