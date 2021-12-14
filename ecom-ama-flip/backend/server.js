import express from "express";
import data from "./data.js";
const app=express();
app.get("/api/products/:id",(req,res)=>{
   const product =data.products.find((p)=>p._id ===req.params.id);
   console.log("product details",product)
   if(product)
   {
      res.send(product);
   }
   else{
      res.status(404).send({message:"product not found"})
   }
});

// reading data from data.js
app.get("/api/products",(req,res)=>{
      res.send(data.products);
});
app.get("/",(req,res)=>{
   res.send("server is ready")
});
const port=process.env.PORT || 5000
app.listen(5000,()=>{
   console.log(`server is run at https://localhost:${port}`)
})
