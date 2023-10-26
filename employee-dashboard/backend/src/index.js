require("dotenv").config()
const express = require("express")

const connectDb = require("./utils/connectDb.js")

const app = express()

connectDb()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port: ${PORT} `))
