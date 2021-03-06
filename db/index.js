require("dotenv").config();
const debug = require("debug")("robots:db");
const mongoose = require("mongoose");

const conectDB = (dbUrl) =>
  new Promise((resolve, reject) => {
    mongoose.set("debug", true);
    mongoose.connect(dbUrl, (error) => {
      if (error) {
        debug("conecting error to database", error.message);
        reject();
        return;
      }
      debug("conected to database");
      resolve();
    });
  });
module.exports = conectDB;
