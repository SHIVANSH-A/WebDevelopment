const fs = require("node:fs");


fs.readFile("./message1.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log("Data : " + data);
    })

// fs.writeFile("message1.txt","Hello from NodeJS",(err)=>{
//         if(err) throw err;
//         console.log("File created successfully");
//     })
   