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

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectUrl);
  });
  
app.listen(PORT, () => {
  `Server is running on port ${PORT}`;
});
