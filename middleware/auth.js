const { getUser } = require("../service/auth");

async function restrictToLoggedInUsersOnly(req, res, next) {
  const userId = req.cookies?.uId;
  console.log(req);
  if (!userId) {
    return res.redirect("/login");
  }

  const user = getUser(userId);

  if (!user) {
    return res.redirect("/login");
  }
  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const userId = req.cookies?.uId;

  const user = getUser(userId);
  req.user = user;
  next();
}

module.exports = { restrictToLoggedInUsersOnly, checkAuth };
