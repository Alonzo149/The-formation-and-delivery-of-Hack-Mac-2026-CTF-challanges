const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


const db = new sqlite3.Database(":memory:");

db.serialize(() => {
    db.run("CREATE TABLE users (username TEXT, password TEXT)");
    db.run("INSERT INTO users VALUES ('admin', 'supersecret')");
    
    db.run("CREATE TABLE secret_flags (FLAG TEXT, description TEXT)");
    db.run("INSERT INTO secret_flags VALUES ('CTF{1nj3Ct!oNs}', 'supersecret')");

});
    
app.get("/challenge2", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.post("/challenge2/login", (req, res) => {
    const { username, password } = req.body;

    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    db.get(query, (err, row) => {
        if (err) {
            res.send(err.message);
            return;
        }
        if (row) {
            res.send(`Login successful! Here is your flag: ${row.username}`);
        } else {
            res.send("Login failed");
        }
    });
});

app.listen(8000, "0.0.0.0", () => {
    console.log("Running on port 8000");
});