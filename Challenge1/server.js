const express = require("express");
const path = require("path");
const app= express();


app.use(express.static(__dirname));

app.get("/challenge1",(req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/challenge1/admin",(req,res)=> {
    res.sendFile(__dirname +"/views/admin.html");
});

app.listen(8000,() => {
    console.log("Server running at port http://localhost:8000");
})