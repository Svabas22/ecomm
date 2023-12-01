import Header from "./Header.js";
import worldIcon from "../Images/world_icon.jpg";
import { TabTitle } from "../Utilities/GeneralFunctions.js";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import fetchData from "./fetch.js";


function Home() {
  const [gridData, setGridData] = useState([]);

  useEffect(async () => {
    
    setGridData(await fetchData("/listings"));
  }, []);
  TabTitle("Home");
  console.log(gridData)
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
