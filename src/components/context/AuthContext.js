import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const existingUser = localStorage.getItem("user") || null;
    const existingPass = localStorage.getItem("pass") || null;
    

    const [user, setUser] = useState(existingUser);
    const [pass, setPass] = useState(existingPass);
    
    

    function registerUser(username, password) {
        localStorage.setItem("user", JSON.stringify({username}));
        localStorage.setItem("pass", JSON.stringify({password}));
        
        
        setUser({user: username});
        setPass({pass: password});
        
        
    }

    function logout() {
        setUser(null);
        setPass(null);
        localStorage.removeItem("user");
        localStorage.removeItem("pass");
    }

    return <AuthContext.Provider value={{ user, pass, registerUser, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };