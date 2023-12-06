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
  const [searchInput, setSearchInput] = useState("");
  const [filteredGridData, setFilteredGridData] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      try {
        const data = await axios.get("/api/listings").then((response) => {
          return response.data;
        });
        setGridData(data); // Set the entire array, not just the first element
        setFilteredGridData(data); // Initialize filtered data with all items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetching();
  }, []);

  useEffect(() => {
    // Filter grid data based on search input
    const filteredData = gridData.filter((item) =>
      item.list_Name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredGridData(filteredData);
  }, [searchInput, gridData]);

  function redirect(list_id, name, region, price) {
    navigate(`/buy`, {
      state: {
        list_id: list_id,
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
            <input
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            ></input>
            <div className="search-input-icon">
              <img src={search_logo} alt="Search icon"></img>
            </div>
          </div>
          <div className="grid-wrapper">
            {filteredGridData.length === 0
              ? gridData.map((item, index) => (
                  <div
                    key={index}
                    className="grid"
                    onClick={() =>
                      redirect(
                        item.list_id,
                        item.list_Name,
                        item.list_region,
                        item.list_price
                      )
                    }
                  >
                    {/* ... rest of the grid rendering code ... */}
                  </div>
                ))
              : filteredGridData.map((item, index) => (
                  <div
                    key={index}
                    className="grid"
                    onClick={() =>
                      redirect(
                        item.list_id,
                        item.list_Name,
                        item.list_region,
                        item.list_price
                      )
                    }
                  >
                    {/* ... rest of the grid rendering code ... */}
                  </div>
                ))}
          </div>
          {filteredGridData.length === 0 && (
            <div className="empty-msg">
              <h1>List is empty.</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
