require('dotenv').config()
const express = require("express");

const PORT = process.env.PORT || 3013;

const app = express();

app.listen(PORT, () => console.log("server started on port: ", PORT));