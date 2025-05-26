//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let password;
var bool = 0;

app.use(bodyParser.urlencoded({extended:true}));
app.use(checkPass);
//Loading home page with index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
//Getting value of password entered and checking password
function checkPass(req,res,next){
    password = req.body["password"];
    if(password==="IloveProgramming"){
        bool = 1;
    }
    else{
        bool = 0;
    }
    next();
}
// function checkPass(req, res, next) {
//     const password = req.body.password;
//     if (password === "ILoveProgramming") {
//         req.isAuthenticated = true;
//     } else {
//         req.isAuthenticated = false;
//     }
//     next();
// }
app.post("/check",(req,res)=>{
    if(bool){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.redirect("/?error=1");
        // res.sendFile(__dirname + "/public/index.html");
    }
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });