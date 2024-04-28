const express = require("express");
const { handleUserSignup, handleUserLogin } = require("../controllers/user");
const router = express.Router();

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);
router.get("/logout", (req, res) => {
  res.clearCookie("uId");
  res.redirect("/login");
});

module.exports = router;
