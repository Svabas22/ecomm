import "./Styles/App.css";
import "./Styles/Home.css";
import "./Styles/BuyAccount.css";
import "./Styles/About.css";
import "./Styles/Register.css";
import "./Styles/Login.css";
import "./Styles/Header.css";
import "./Styles/AddAccount.css";
import "./Styles/Footer.css";
import "./Styles/Fonts/Font.css";
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
import About from "./Components/About";
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
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

/*<Protected Cmp={a component} /> */
