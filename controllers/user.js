const UserData = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");
const { all } = require("../routes/url");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  const user = await UserData.create({ name, email, password });
  return res.render("login");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await UserData.findOne({ email, password });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uId", sessionId);
  return res.redirect("/");
}

module.exports = { handleUserSignup, handleUserLogin };
