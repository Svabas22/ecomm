import { TabTitle } from "../Utilities/TabTitle.js";
import Header from "./Header.js";
import axios from "axios";
import { useState, useEffect } from "react";
import worldIcon from "../Images/world_icon.jpg";

function AccountList() {
  const [gridData, setGridData] = useState([]);
  useEffect(() => {
    // Fetch user's listings when the component mounts
    async function fetchUserListings() {
      try {
        const response = await axios.get("/api/listuser");
        setGridData(response.data);
      } catch (error) {
        console.error("Error fetching user listings:", error);
      }
    }

    fetchUserListings();
  }, []); // Empty dependency array means this effect runs once when the component mounts
  async function removeelisting() {
    let data = await axios.get("/api/listuser").then((response) => {
      return response.data;
    });
    setGridData(data);
  }
  TabTitle("Account List");
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <div className="grid-wrapper">
            {gridData.map((item, index) => (
              <div
                key={index}
                className="grid"
                onClick={() => removeelisting()}
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

export default AccountList;
