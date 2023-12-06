import { TabTitle } from "../Utilities/TabTitle.js";
import Header from "./Header.js";
import React, { useEffect, useState } from "react";
import { json, useLocation } from "react-router-dom";
import axios from "axios";

function BuyAccount() {
  TabTitle("Purchase");
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const location = useLocation();
  let list_i = location.state.list_id;
  const [showMore, setShowMore] = useState(false);
  const text =
    "It is necessary to have an active registered account and be logged in to complete any transaction. Please contact us if any help is necessary.";
  async function execute_buy() {
    const handlePurchase = async () => {
      // Make a request to your backend to remove the purchased item from the data
      try {
        let result = await axios
          .post("/api/rlisting", {
            list_id: list_i,
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
          .then((response) => {
            return response.data;
          });
        console.log(result);
        if (result["error"]) {
          // Display an alert with the error message
          window.alert(result["error"]);
        } else {
          // Display an alert with message
          setPurchaseSuccess(true);
          window.alert(
            "Username: " +
              result["username"] +
              " Password: " +
              result["password"]
          );
        }
      } catch (error) {
        // Handle error
        console.error("Error removing listing:", error);
      }
    };
    handlePurchase();
  }

  return (
    <>
      <Header />
      <div className="body">
        <div className="wrapper">
          <div className="main-title">
            <h1>{location.state.name}</h1>
          </div>
          <div className="box a">
            <div className="content-wrapper">
              <div className="row product-info">
                <h6>Product info</h6>
              </div>
              <div className="row details">
                <h6>Details</h6>
              </div>
              <div className="row offer">
                <hr />
                <p>
                  This is a {location.state.price} eur offer for{" "}
                  {location.state.region} region. <br />
                  <p>
                    {showMore ? text : `${text.substring(0, 81)}`}
                    <button
                      className="btn-show-more"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? "Show less" : "Show more"}
                    </button>
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="box b">
            <div className="content-wrapper">
              <div className="row buy">
                <h6>Buy details</h6>
                <hr />
              </div>
              <div className="row price">
                <div className="total price">
                  <h6>Total price</h6>
                </div>
                <div className="price count">
                  <h6>{location.state.price} eur</h6>
                  <hr />
                </div>
              </div>
              {purchaseSuccess ? (
                <div>
                  <p>Thank you for your purchase!</p>
                </div>
              ) : (
                <div className="row-btn">
                  <button
                    className="buy-btn"
                    onClick={() => {
                      execute_buy();
                    }}
                  >
                    <span>Buy now</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyAccount;
