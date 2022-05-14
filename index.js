require("dotenv").config();
const debug = require("debug")("robots:root");
const initializeServer = require("./server/initializeServer");

const conectDB = require("./db/index");

(async () => {
  try {
    await conectDB(process.env.DATABASE);
    await initializeServer(process.env.PORT || 4000);
  } catch (error) {
    debug("Error ocurred");
  }
})();
