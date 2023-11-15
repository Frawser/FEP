"use strict";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect("mongodb+srv://Admin:admin@cluster0.tzx7plk.mongodb.net/data");
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});
app.listen(port, () => console.log(`Listening on port ${port}`));
