const mysql = require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config();


const db = mysql.createPool({
    host: 'localhost', //process.env.URL,
    port: '1234',
    user: process.env.SQL_USERNAME,
    password: process.env.CONNECTION_PASS,
    database: 'mydb'
}).promise()

async function getUsers(){
    const [rows] = await db.query("SELECT * FROM mydb.users")
    return rows
}
async function fetchUsers() {

        const users = await getUsers();
        console.log(users);
}
fetchUsers();
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
