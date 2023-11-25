import "./Styles/App.css";
import "./Styles/Home.css";
import "./Styles/BuyAccount.css";
import "./Styles/Header.css";
import "./Styles/Footer.css";
import "./Styles/Font.css";
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
import HomePage from "./Components/test";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<AddAccount />} />
          <Route path="/list" element={<AccountList />} />
          <Route path="/buy" element={<BuyAccount />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

/*<Protected Cmp={a component} /> */
