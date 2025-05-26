import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

let date = new Date();
// let date = new Date("June 30,2024 11:33:00");
let day = date.getDay();
let eventFunction;
if(day===0 || day===6){
    day = "Weekend";
    eventFunction = "Have Fun";
}
else{
    day = "Weekday";
    eventFunction = "Work hard";
}

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        day : day, event : eventFunction
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });