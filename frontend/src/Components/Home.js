import Header from "./Header.js";
import worldIcon from "../Images/world_icon.jpg";
import { TabTitle } from "../Utilities/GeneralFunctions.js";
import React, { useEffect, useState } from 'react';



function Home() {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    // Simulating asynchronous data fetching (replace this with your actual data fetching logic)
    const fetchData = async () => {
      try {
        // Assuming you fetch your data asynchronously and resolve it
        const data = await fetch("http://localhost:4321/listings"); 
        const jsondata = await data.json();
        console.log(jsondata)
        // Once data is fetched, update state with the retrieved data
        setGridData(jsondata[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data
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
