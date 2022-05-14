require("dotenv").config();
const initializeServer = require("./server/initializeServer");

initializeServer(process.env.PORT || 4000);
