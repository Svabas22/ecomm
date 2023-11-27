const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config();
const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: process.env.URL,
    user: process.env.SQL_USERNAME,
    password: process.env.CONNECTION_PASS,
    database: 'mysql'
})
db.q
export default db;
// app.get('/',(re,res)=>{
// return res.json("Backend");
// })

// app.get('/users',(rreq,res)=>{
//     const sql = "SELECT * FROM users";
//     db.query(sql,(err,data)=>{
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })

// app.listen(4321,()=>{
//     console.log("listening");
// })
