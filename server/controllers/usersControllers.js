const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../db/models/User");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    res.status(401).json({ msg: "usuario o contraseña incorrectos" });
  } else {
    const userData = {
      id: user.id,
      username: user.username,
    };
    const rightPassword = await bcrypt.compare(password, user.password);

    if (!rightPassword) {
      const error = new Error("usuario o contraseña incorrectos");
      error.code = 403;
      next(error);
    } else {
      const token = jwt.sign(userData, process.env.JWT_SECRET);
      res.json({ token });
    }
  }
};
const encryptPassword = (password) => bcrypt.hash(password, 10);

const registerUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    const error = new Error();
    error.statusCode = 409;
    error.customMessage = "this user already exists";
    next(error);
  }
  const encryptedPassword = await encryptPassword(password);

  try {
    const newUser = await User.create({
      username,
      password: encryptedPassword,
    });
    res
      .status(201)
      .json({ user: { username: newUser.username, id: newUser.id } });
  } catch (error) {
    error.statusCode = 400;
    error.customMessage = "wrong user data";
  }
};

module.exports = { loginUser, registerUser };
