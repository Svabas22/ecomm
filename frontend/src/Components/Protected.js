import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming you store the token in localStorage

    if (!token) {
      // Redirect to login if no token is found
      navigate("/login");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default Protected;
