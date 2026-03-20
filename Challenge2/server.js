const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Database (in-memory)
const db = new sqlite3.Database(":memory:");
// Create users table and insert admin user
db.serialize(() => {
    db.run("CREATE TABLE users (username TEXT, password TEXT)");
    db.run("INSERT INTO users VALUES ('admin', 'supersecret')");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    //vulnerable query
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    db.get(query, (err, row) => {
        if (row) {
            res.sendFile(path.join(__dirname, "views", "flag2.html"));
        } else {
            res.send("Login failed");
        }
    });
});

app.listen(8000, "0.0.0.0", () => {
    console.log("Running on port 8000");
});
