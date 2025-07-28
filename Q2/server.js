// server.js
const express = require("express");
const path = require("path");
const app = express();

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.listen(8000);
