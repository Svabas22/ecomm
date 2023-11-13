import logo from "./logo.svg";
import "./App.css";
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
        </Routes>
      </BrowserRouter>

      <div>body</div>
      <Footer />
    </div>
  );
}

export default App;
