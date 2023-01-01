const express = require("express");
const router = require("./Router/studRouter");

require("./Config/studDB");
const port = 2000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: " server is up and ruuning",
  });
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`server is up and running ${port}`);
});
