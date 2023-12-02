import Header from "./Header.js";
import worldIcon from "../Images/world_icon.jpg";
import { TabTitle } from "../Utilities/TabTitle.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";

function Home() {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const data = await axios.get("/api/listings").then((response) => {
          return response.data;
        });
        setGridData(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetching();
  }, []);

  TabTitle("Home");
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <div className="grid-wrapper">
            {gridData.map((item, index) => (
              <div key={index} className="grid">
                <div className="row-grid">
                  <img className="grid-icon" src={worldIcon} />
                  <div className="grid-title">
                    <h6>{item.list_Name}</h6>
                  </div>
                </div>
                <hr />
                <div className="row-grid account">
                  <div className="tier-level">T5 L2</div>
                  <div className="grid-price">
                    <div className="price-text">Price</div>
                    <div className="price-num">{item.list_price}</div>
                    <div className="price-currency">EUR</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
