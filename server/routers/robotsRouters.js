const express = require("express");

const router = express.Router();

const { getRobots } = require("../controllers/robotsControllers");

router.get("/", getRobots);

module.exports = router;
