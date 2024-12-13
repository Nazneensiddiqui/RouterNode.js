  const express= require("express");
  const route=express.Router();
   route.get("/stuhome" , (req,res)=>{
    res.send("<h1>this is my home page</h1>");
   })
   route.get("/stuclass" , (req,res)=>{
    res.send("<h1>this is my student class page</h1>");
   })
   route.get("/fees" , (req,res)=>{
    res.send("<h1>this is my fees 45000/-</h1>");
   })
   route.get("/result" , (req,res)=>{
    res.send("<h1>this is result page </h1>");
   })
   module.exports=route;