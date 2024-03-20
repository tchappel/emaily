const express = require("express");
const authRouter = require("./routes/auth.router");

const app = express();

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
