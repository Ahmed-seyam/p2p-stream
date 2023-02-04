const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(express.static(path.join(__dirname, "/")));

app.get("/stream", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
  console.log("App Listen To Port 3000");
});
