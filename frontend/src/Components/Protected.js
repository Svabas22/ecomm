import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Protected = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token);
    if (!token) {
      // Redirect to login if no token is found
      navigate("/login");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default Protected;
