require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const robotsRouters = require("./routers/robotsRouters");
const auth = require("./middlewares/auth");



const { error404, error500 } = require("./middlewares/errors");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

app.use("/robots", auth, robotsRouters);

app.use(error404);
app.use(error500);

module.exports = app;
