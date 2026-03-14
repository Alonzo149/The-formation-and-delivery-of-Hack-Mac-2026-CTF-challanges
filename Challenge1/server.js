const express = require("express");
const path = require("path");
const app= express();


app.use(express.static(__dirname));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/admin.html",(req,res)=> {
    res.sendFile(path.join(__dirname, "admin", "admin.html"));
});

app.listen(8000,"0.0.0.0",() => {
    console.log("Server running at port http://localhost:8000");
})