const express = require("express");

const router = express.Router();

const { getRobots, deleteRobot } = require("../controllers/robotsControllers");

router.get("/", getRobots);
router.delete("/:idRobot", deleteRobot);

module.exports = router;
