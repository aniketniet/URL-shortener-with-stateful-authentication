const express = require("express");
const ejs = require("ejs");
const path = require("path");
const cookieParser = require("cookie-parser");
const { restrictToLoggedInUsersOnly, checkAuth } = require("./middleware/auth");

const app = express();
const PORT = 8001;
const URL = require("./models/url");
const { connect } = require("./connection");

const urlroute = require("./routes/url");
const staticRoute = require("./routes/staticRoute");
const userRouter = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/url", restrictToLoggedInUsersOnly, urlroute);
app.use("/", checkAuth, staticRoute);
app.use("/user", userRouter);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  `Server is running on port ${PORT}`;
});
