

const express=require("express");
const route=express.Router();

route.get("/teacherinfo", (req ,res)=>{
    res.send("<h1>the React .js is a open-source javascript library used to develop complex and intractive web and mobile UI</h1>")
})
route.get("/department", (req ,res)=>{
    res.send("<h1>React follows the component-based approach to create reusable and complex UIs</h1>")
})
route.get("/subject", (req ,res)=>{
    res.send("<h1>it is the build reuseble component for the view layer in MVC</h1>")
})
route.get("/salary", (req ,res)=>{
    res.send("<h1>virtual DOM :React uses a virtual DOM to efficiently updata and render component </h1>")
})
module.exports=route;
