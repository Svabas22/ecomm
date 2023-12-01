import { TabTitle } from "../Utilities/GeneralFunctions.js";
import Header from "./Header.js";
import { useState } from "react";
import axios from "axios";
import CustomSelect from "../Utilities/CustomSelect.js";

function AddProduct() {
  TabTitle("Add Product");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState("");
  const [price, setPrice] = useState("");
  async function addProduct() {
    console.warn(name, description, price, region, username, password);
    const formData = new FormData();
    formData.append("account_name", name);
    formData.append("account_description", description);
    formData.append("list_price", price);
    formData.append("list_region", region);
    formData.append("account_username", username);
    formData.append("account_password", password);
    formData.append("");
    let result = await fetch("/api/addlisting", {
      method: "POST",
      body: formData,
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
                  <CustomSelect />
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
