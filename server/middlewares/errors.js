require("dotenv").config();
const debug = require("debug")("robots:errors");

const error404 = (req, res) => {
  debug("error, not found");
  res.status(404).json({ msg: "error, not found" });
};

// eslint-disable-next-line no-unused-vars
const error500 = (error, req, res, next) => {
  debug("server error");
  res.status(500).json({ msg: "server error" });
};

module.exports = {
  error404,
  error500,
};
