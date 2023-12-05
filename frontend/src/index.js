import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Fonts/index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
