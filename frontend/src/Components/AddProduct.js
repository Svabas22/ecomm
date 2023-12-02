import { TabTitle } from "../Utilities/TabTitle.js";
import Header from "./Header.js";
import { useState } from "react";
import axios from "axios";
import CustomSelect from "../Utilities/AddProductSelect.js";

function AddProduct() {
  TabTitle("Add Product");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [price, setPrice] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (selectedOption) => {
    setSelectedRegion(selectedOption.value); // Update the selected region in state
  };
  async function addProduct() {
    let data = { name, description, username, password, price, selectedRegion };
    let result = await fetch("/api/addlisting", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
    });
    alert("Data has been saved");
  }
  return (
    <>
      <div className="main">
        <Header />

        <div className="body">
          <div className="wrapper-addProduct">
            {" "}
            <div className="addProductBackground"></div>
            <div className="addProduct-content">
              <div className="col-sm-6 offset-sm-3">
                <div className="Page-title">
                  <h1>Add account</h1>
                </div>
                <div className="row-input">
                  <p>Name</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="row-input">
                  <p>Description</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="row-input">
                  <p>Price</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="row-input">
                  <p>Region</p>
                  <CustomSelect onChange={handleRegionChange} />
                </div>
                <div className="row-input">
                  <p>Username</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    onChange={(e) => setuserName(e.target.value)}
                  />
                </div>
                <div className="row-input">
                  <p>Password</p>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button onClick={addProduct} className="btn btn-primary">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
