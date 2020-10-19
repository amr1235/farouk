const express = require('express');
const fs = require('fs');

const app = express();

app.get("/",(req,res) => {
    res.send("Home");
});
app.get("/q",(req,res) => {
    res.send("query Page");
    fs.writeFileSync("data.txt",req.query.response);
    console.log(JSON.stringify(req.query));
});

app.listen(3000,() => {
    console.log("server stated ...");
});