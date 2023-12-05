import "./Styles/App.css";
import "./Styles/Home.css";
import "./Styles/BuyAccount.css";
import "./Styles/About.css";
import "./Styles/Register.css";
import "./Styles/Login.css";
import "./Styles/Header.css";
import "./Styles/AddProduct.css";
import "./Styles/Footer.css";
import "./Styles/Fonts/Font.css";
import { Button } from "react-bootstrap";
import Header from "./Components/Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import Home from "./Components/Home.js";
import AddProduct from "./Components/AddProduct.js";
import AccountList from "./Components/AccountList.js";
import Protected from "./Components/Protected.js";
import Footer from "./Components/Footer.js";
import BuyAccount from "./Components/BuyAccount.js";
import About from "./Components/About.js";
import CustomSelect from "./Utilities/AddProductSelect.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/add"
            element={
              <Protected>
                <AddProduct />
              </Protected>
            }
          />
          <Route path="/list" element={<AccountList />} />
          <Route path="/buy" element={<BuyAccount />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
