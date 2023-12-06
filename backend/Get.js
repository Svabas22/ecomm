const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require('path');
const prometheus = require('prom-client');
const { get } = require("http");


dotenv.config();

const app = express();
const port = process.env.BACKENDPORT; // Update this to the port your backend is running on

// Create a custom metric
const customMetric = new prometheus.Gauge({
  name: 'custom_metric',
  help: 'Description of the custom metric',
});

// Endpoint to increment the custom metric
app.get('/increment-metric', (req, res) => {
  customMetric.inc();
  res.send('Metric incremented');
});

// Endpoint to expose Prometheus metrics
app.get('/metrics', (req, res) => {
  res.set('Content-Type', prometheus.register.contentType);
  res.end(prometheus.register.metrics());
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

function validate_input(inputString) {
  const specialChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    "|",
    "\\",
    ";",
    ":",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "/",
    "?",
  ];

  // Replace each special character from the word list with an empty string
  specialChars.forEach((char) => {
    inputString = inputString.split(char).join("");
  });
  return inputString;
}

function verifyToken(req, res, next) {
  const token = req.cookies["token"];

  if (!token) {
    return res.status(401).json({ auth: false, message: "Not Allowed" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token" });
    }
    if (typeof decoded.id === "number") {
      req.userId = decoded.id; // Store user ID from token in request object
    } else {
      return res.status(500).json({ message: "Failed to authenticate token" });
    }
    next();
  });
}

// database setup
const db = mysql
  .createPool({
    host: process.env.URL,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USERNAME,
    password: process.env.CONNECTION_PASS,
    database: "mydb",
  })
  .promise();

app.post("/register", async (req, res) => {
  const { body } = req;

  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Invalid request body" });
  }
  const username = body.username;
  const password = body.password;
  const email = body.email;

  if (!username || !password || !email) {
    return res.status(400).json({ error: "Missing username or password" });
  }
  if (username !== validate_input(username)) {
    return res
      .status(409)
      .json({ message: "Username cannot contain special characters" });
  }
  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

  // Check if the username already exists in the database
  try {
    const existingUsers = await db.query(
      "SELECT * FROM users WHERE users_name = ?",
      [username]
    );
    if (existingUsers[0].length > 0) {
      return res.status(409).json({ message: "Username already exists" });
    } else {
      // If username is available, insert the new user into the database
      const adduser = await db.query(
        "INSERT INTO users (users_name, users_password, users_email) VALUES (?, ?, ?)",
        [username, hashedPassword, email]
      );

      const token = jwt.sign(
        { id: adduser[0].insertId, username: username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      ); // Create JWT token
      res.cookie("token", token);
      return res.status(200).json({ message: "User created succesfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { body } = req;
  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Invalid request body" });
  }

  const username = body.username;
  const password = body.password;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing username or password" });
  }

  if (username !== validate_input(username)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  try {
    const existingUsers = await db.query(
      "SELECT * FROM users WHERE users_name = ?",
      [username]
    );
    if (existingUsers[0].length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const user = existingUsers[0][0];
    const passwordMatch = await bcrypt.compare(password, user.users_password);
    if (passwordMatch) {
      const token = jwt.sign({ id: user.users_id, username: username  }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      }); // Create JWT token
      res.cookie("token", token);
      return res.status(200).json({ message: "Sucess" });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/addlisting", verifyToken, async (req, res) => {
  const { body } = req;

  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Invalid request body" });
  }

  const list_Name = body.name;
  const list_description = body.description;
  const list_price = body.price;
  const list_region = body.selectedRegion;
  const account_username = body.username;
  const account_password = body.password;

  //check if list_price is a number
  if (isNaN(list_price)) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  if (list_price.match() === null) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  if (
    !list_Name ||
    !list_description ||
    !list_price ||
    !account_username ||
    !account_password
  ) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const addListing = await db.query(
      "INSERT INTO listings (list_Name, list_description,list_price,users_id_for_list,account_username,account_password,list_region) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        list_Name,
        list_description,
        list_price,
        req.userId,
        account_username,
        account_password,
        list_region,
      ]
    );
    return res.status(201).json({ message: "sucsess" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/listings", async (req, res) => {
  try {
    const listings = await db.query(
      "SELECT list_Name, list_price, list_description, list_region FROM listings"
    );
    console.log(listings[0]); // Log the data to the console for debugging
    res.status(200).json(listings[0]);
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/rlisting", verifyToken, async (req, res) => {
  const { body } = req;

  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Invalid request body" });
  }

  const list_id = body.list_id;

  
  if (!list_id) {
    return res.status(400).json({ error: "Missing parameter" });
  }
  
  try {
    const getalluserslistings = await db.query("SELECT list_id FROM listings WHERE users_id_for_list = ?",[req.userId]);
    getalluserslistings = getalluserslistings[0];
    let exists=false;
    getalluserslistings.forEach(element => {
      if(element['list_id'] === list_id){
        exists=true;
      }
    });
    if(!exists){
      return res.status(401).json({ error: "Permission denied" });
    }
    const removeListing = await db.query("DELETE FROM listings WHERE list_id = ?", [id]);
    console.log(removeListing)
    if (removeListing[0].affectedRows === 0) {
      return res.status(404).json({ error: "Listing not found" });
    }
    return res.status(200).json({ message: "Listing removed successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(4321, async () => {
  console.log("listening on 4321");
  if (process.env.STARTED !== null) console.log("Config loaded");
  else console.log("Config not loaded");
});
