require("dotenv").config()
const express = require("express")
const server = express()
const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`The Server is live on Port ${PORT} `))
