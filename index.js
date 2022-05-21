const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5000;

// app.use(express.static(__dirname + "/html"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/startPage.html"));
});

app.post("/html/menu.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/menu.html"));
});

app.post("/html/addressChecker.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/addressChecker.html"));
});

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});
