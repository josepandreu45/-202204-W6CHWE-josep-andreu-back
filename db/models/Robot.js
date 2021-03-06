const { model, Schema } = require("mongoose");

const RobotSchema = new Schema({
  image: { type: String },
  name: { type: String },
  date: { type: String },
  resistance: { type: Number },
  velocity: { type: Number },
});

const Robot = model("Robot", RobotSchema, "robots");

module.exports = Robot;
