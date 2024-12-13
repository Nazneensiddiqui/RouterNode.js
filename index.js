

const express=require("express");
const app=express();
const stuRouter=require("./Routes/studentRoute")
const teachRouter=require("./Routes/teacherRoute")

app.use("/student", stuRouter);
app.use("/teacher" , teachRouter);
app.listen(8000, ()=>{
    console.log("server run on 8000")
})
