import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser , setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async(inputs) =>{
        //to do
        const res = await axios.post("http://localhost:8800/api/auth/login", inputs, {
            withCredentials:true,
        });
        setCurrentUser(res.data)
    };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);

    return (
        <AuthContext.Provider value={{currentUser , login}}>
            {children}
        </AuthContext.Provider>
    );
};