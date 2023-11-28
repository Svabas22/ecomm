const mysql = require('mysql2')
//const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());

function validate_input(inputString){
    const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ';', ':', '"', '\'', '<', '>', ',', '.', '/', '?'];

    // Replace each special character from the word list with an empty string
    specialChars.forEach(char => {
      inputString = inputString.split(char).join('');
    });
    return inputString
};

// database setup
const db = mysql.createPool({
    host: 'localhost', //process.env.URL,
    port: '1234',
    user: process.env.SQL_USERNAME,
    password: process.env.CONNECTION_PASS,
    database: 'mydb'
}).promise();

app.post('/register', async (req, res) => {
    
    const { body } = req;

    if (!body || typeof body !== 'object') {
        return res.status(400).json({ error: 'Invalid request body' });
    }
    const username = body.username;
    const password = body.password;

    if (!username || !password) {
        return res.status(400).json({ error: 'Missing username or password' });
    }
    if(username!==validate_input(username)){
        return res.status(409).json({ message: 'Username cannot contain special characters' });
    }
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds
    
    // Check if the username already exists in the database
    try{
        const existingUsers = await db.query('SELECT * FROM users WHERE users_name = ?', [username]);
        if (existingUsers[0].length > 0) {
            
            return res.status(409).json({ message: 'Username already exists' });
            
        }else {
            // If username is available, insert the new user into the database
            const adduser= await db.query('INSERT INTO users (users_name, users_password) VALUES (?, ?)', [username, hashedPassword]);
                
            const token = jwt.sign({ id: res.insertId }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Create JWT token
            return res.status(201).json({ auth: true, token });
                
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const { body } = req;

    if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid request body' });
    }

    const username = body.username;
    const password = body.password;

    if (!username || !password) {
    return res.status(400).json({ error: 'Missing username or password' });
    }
    if(username!==validate_input(username)){
        return res.status(401).json({ auth: false, message: 'Invalid credentials' });
    }
    try{
        const existingUsers = await db.query('SELECT * FROM users WHERE users_name = ?', [username]);
        if(existingUsers[0].length===0){
            return res.status(401).json({ auth: false, message: 'Invalid credentials' });
        }
        const user=existingUsers[0][0]
        const passwordMatch = await bcrypt.compare(password, user.users_password)
        if (passwordMatch) {
            const token = jwt.sign({ id: user.idusers }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Create JWT token
    
            return res.status(200).json({ auth: true, token });
        }else{
            return res.status(401).json({ auth: false, message: 'Invalid credentials' });
        }
    }catch(error){
        return res.status(500).json({ error: 'Internal server error' });
    }
    
  });

app.post('/addlisting',async (req,res)=>{
    const myCookie = req.cookies['auth']
    
    const { body } = req;

    if (!body || typeof body !== 'object') {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    const list_Name = body.list_Name;
    const list_description=body.list_description;
    const list_price= body.list_price;

    if (!list_Name || !list_description || !list_price) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    try{
        const existingUsers = await db.query('SELECT * FROM listings WHERE users_name = ?', [username]);
        if (existingUsers[0].length > 0) {
            
            return res.status(409).json({ message: 'Username already exists' });
            
        }else {
            // If username is available, insert the new user into the database
            const addListing= await db.query('INSERT INTO listings (list_Name, list_description,list_price,users_id_for_list) VALUES (?, ?, ?, ?)', [list_Name, list_description,list_price,userid]);
                
            
            return res.status(201).json({ auth: true, token });
                
        }
    }catch(error){
        return res.status(500).json({ error: 'Internal server error' });
    }

});

app.listen(4321,()=>{
    console.log("listening on 4321");
});
