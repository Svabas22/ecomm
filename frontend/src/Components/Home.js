import Header from "./Header.js";
import worldIcon from "../Images/world_icon.jpg";
import { TabTitle } from "../Utilities/TabTitle.js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import search_logo from "../Images/search_logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const [gridData, setGridData] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      try {
        const data = await axios.get("/api/listings").then((response) => {
          return response.data;
        });
        console.log(data);
        setGridData(data); // Set the entire array, not just the first element
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetching();
  }, []);

  function redirect(index, name, region, price) {
    navigate(`/buy/${index}`, {
      state: {
        index: index,
        name: name,
        region: region,
        price: price,
      },
    });
  }

  TabTitle("Home");
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <div className="search">
            <input className="search-input" placeholder="Search"></input>
            <div className="search-input-icon">
              <img src={search_logo}></img>
            </div>
          </div>
          <div className="grid-wrapper">
            {gridData.map((item, index) => (
              <div
                key={index}
                className="grid"
                onClick={() =>
                  redirect(
                    index,
                    item.list_Name,
                    item.list_region,
                    item.list_price
                  )
                }
              >
                <div className="row-grid">
                  <img className="grid-icon" src={worldIcon} />
                  <div className="grid-title">
                    <h6>{item.list_Name}</h6>
                  </div>
                </div>
                <hr />
                <div className="row-grid account">
                  <div className="tier-level">{item.list_region}</div>
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
