import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let fullName;
let nameCount;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
  
});

app.post("/submit", (req, res) => {
  fullName=req.body["fName"]+req.body["lName"];
  nameCount=fullName.length;
  res.render("index.ejs",{
    count : nameCount
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
