import express from "express";
import data from "./data.js";
const app=express();

// reading data from data.js
app.get("/api/products",(req,res)=>{
   res.send(data.products);
});
app.get("/",(req,res)=>{
   res.send("server is ready")
});

app.listen(5000,()=>{
   console.log("server is run at https://localhost:5000")
})
