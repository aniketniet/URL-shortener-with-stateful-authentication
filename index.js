const express = require("express");
const app = express();
const PORT = 8001;
const urlroute = require("./routes/url");
const URL = require("./models/url");

const {connect} = require("./connection");


app.use(express.json());

connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/url", urlroute);



  
app.listen(PORT, () => {
  `Server is running on port ${PORT}`;
});
