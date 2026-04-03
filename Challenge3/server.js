const express = require("express");
const path = require("path");
const app= express();


app.use(express.static(path.join(__dirname,"views")));

app.get("/challenge3/robots.txt", (req, res) => {
    res.sendFile(__dirname + "/robots.txt");
});

app.get("/challenge3",(req,res) => {
    res.sendFile(path.join(__dirname,"views","index.html"));
})

app.listen(5002,() => {
    console.log("Server running at port http://localhost:5002/challenge3");
})