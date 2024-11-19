"use strict";

require("dotenv").config();
const PORT = process.env.PORT || 3006

const express = require("express");
const cors = require("cors");
const contactRouter = require("./src/routes/contact.route");

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', contactRouter);

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});