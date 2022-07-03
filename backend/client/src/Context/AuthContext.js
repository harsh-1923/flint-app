import React, { createContext, useEffect, useState } from "react";
import AuthServices from "../Services/AuthServices.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  

  let [isAuthenticated, setIsAuthenticated] = useState(false);
  let [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const parsed = JSON.parse(userData);
      console.log(parsed)
      setUser(parsed);
      setIsAuthenticated(true);
      setIsLoaded(true);
    }
  }, []);

  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          setUser,
          isAuthenticated,
          setIsAuthenticated,
          isLoaded,
          setIsLoaded,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
