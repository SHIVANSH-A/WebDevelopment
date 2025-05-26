import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello,world");
    // console.log(req);
})

app.get("/about",(req,res)=>{
    res.send("<h1>Hello</h1>");
    res.sendStatus(200);
})


app.listen(port,()=>{
    console.log(`Server is running on  ${port}.`);
})