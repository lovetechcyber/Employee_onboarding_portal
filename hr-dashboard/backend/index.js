require("dotenv").config();
const express = require("express");
const server = express();
const PORT = process.env.PORT || 5000;
const router = require("./src/routes/users");
const main = require("./src/db.config");

server.use(express.json());
server.use("/employee", router);
server.get("/", (req, res) => {
  res.send("Welcome to heshR backend");
});
// Connect to MongoDB
main().catch((err) => console.log(err));

server.listen(PORT, () => console.log(`The Server is live on Port ${PORT} `));
