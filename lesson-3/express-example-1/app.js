const express = require("express");
const fs = require("fs").promises;

const app = express();

app.use((req, res, next)=>{
    console.log("First middleware");
    next();
});

app.use(async (req, res, next)=>{
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    try{
        await fs.appendFile("server.log", `${req.url}_${year}-${month}-${day}-${hours}-${minutes}-${seconds}\n`);
    }
    catch(error){
        console.log(error);
    }
    next();
});

app.get("/", (req, res)=>{
    res.send("<h2>Main page</h2>");
});

app.get("/about-us", (req, res)=>{
    res.send("<h2>About page</h2>");
});

app.get("/contacts", (req, res)=>{
    res.send("<h2>Contacts page</h2>");
});

app.listen(3000);