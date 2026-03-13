const h = require("express");
const path = require("path");
const app= h();


app.use(h.static(__dirname));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/admin.html",(req,res)=> {
    res.sendFile(path.join(__dirname, "admin", "admin.html"));
})

app.listen(8000,() => {
    console.log("Server running at port http://localhost:8000");
})