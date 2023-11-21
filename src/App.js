import logo from "./logo.svg";
import "./Styles/App.css";
import "./Styles/BuyAccount.css";
import "./Styles/Header.css";
import "./Styles/Footer.css";
import { Button } from "react-bootstrap";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import AddAccount from "./Components/AddAccount";
import AccountList from "./Components/AccountList";
import Protected from "./Components/Protected";
import Footer from "./Components/Footer";
import BuyAccount from "./Components/BuyAccount";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddAccount />} />
          <Route path="/list" element={<Protected Cmp={AccountList} />} />
          <Route path="/buy" element={<BuyAccount />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
