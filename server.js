const express = require("express");
const cors = require("cors");
const app = express();

const port = 7002;

app.use(cors());
app.use(express.json());

const root = require("path").join(__dirname, "build");
app.use(express.static(root));
app.get("/*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.listen(port, () => {
  console.log(`listening ${port}`);
});