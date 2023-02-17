const express = require("express");
const path = require("path");

const cors = require("cors");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/", (req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
