const express = require('express');

const app = express();

app.get("/",(req,res) => {
    res.send("Home");
});
app.get("/q",(req,res) => {
    res.send("query");
    console.log(JSON.stringify(req.query));
});

app.listen(3000,() => {
    console.log("server stated ...");
});