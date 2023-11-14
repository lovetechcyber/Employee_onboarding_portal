require('dotenv').config()
const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')

const connectDatabase = require('./src/config/database')
connectDatabase()

server.use(cors())
server.use(express.json())



server.listen(PORT, () => console.log(`The Server is live on Port ${PORT} `))