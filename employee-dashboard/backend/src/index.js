require("dotenv").config()
const express = require("express")

const connectDb = require("./utils/connectDb.js")

const app = express()

app.use(express.json())
app.use(cors())
app.use(compression())
app.use(helmet())

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"))

connectDb()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port: ${PORT} `))
