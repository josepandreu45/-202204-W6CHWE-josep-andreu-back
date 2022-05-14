require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { error404, error500 } = require("./middlewares/errors");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(error404);
app.use(error500);

module.exports = app;
