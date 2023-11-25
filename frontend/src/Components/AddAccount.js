import Header from "./Header";
import { useState } from "react";
function AddAccount() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [tier, setTier] = useState("");
  const [division, setDivision] = useState("");
  const [price, setPrice] = useState("");
  async function addAccount() {
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
      <Header />
      <div className="body">
        <div className="col-sm-6 offset-sm-3">
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="tier"
            onChange={(e) => setTier(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="division"
            onChange={(e) => setDivision(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <button onClick={addAccount} className="btn btn-primary">
            Add account
          </button>
        </div>
      </div>
    </>
  );
}

export default AddAccount;
