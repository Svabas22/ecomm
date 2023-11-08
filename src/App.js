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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected Cmp={AddAccount} />} />
          <Route path="/list" element={<Protected Cmp={AccountList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
