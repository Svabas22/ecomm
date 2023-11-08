import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Protected(props) {
  let Cmp = props.Cmp;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/register");
    }
  }, []);
  return (
    <>
      <Cmp />
    </>
  );
}

export default Protected;
