const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const helmet = require("helmet");

app.use(
  cors({
    origin: true,
  })
);

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(express.static(path.join(__dirname, "/")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/stream-viblast", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/stream-sldp", function (req, res) {
  res.sendFile(__dirname + "/public/SLDP.html");
});

app.listen(3000, () => {
  console.log("App Listen To Port 3000");
});
