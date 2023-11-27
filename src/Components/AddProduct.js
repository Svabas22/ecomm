import Header from "./Header.js";
import { useState } from "react";
function AddProduct() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [tier, setTier] = useState("");
  const [division, setDivision] = useState("");
  const [price, setPrice] = useState("");
  async function addProduct() {
    console.warn(name, password, tier, division, price);
    const formData = new FormData();
    formData.append("name");
    formData.append("password");
    formData.append("tier");
    formData.append("division");
    formData.append("price");
    let result = await fetch("http://localhost:8000/api/addaccount?=", {
      method: "POST",
      body: formData,
    });
    alert("Data has been saved");
  }
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <div className="wrapper-addAccount"></div>
          <div className="addAccountBackground"></div>
          <div className="addAccount-content">
            <div className="col-sm-6 offset-sm-3">
              <div className="Page-title">
                <h1>Add account</h1>
              </div>
              <div className="row-input">
                <p>Username</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
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
              <div className="row-input">
                <p>Region</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="region"
                  onChange={(e) => setTier(e.target.value)}
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

              <button onClick={addProduct} className="btn btn-primary">
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
