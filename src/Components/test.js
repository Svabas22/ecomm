import React from "react";
import db from "./backend/Get"

function test(){
  const sql = "SELECT * FROM users";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
  }
export default test;
