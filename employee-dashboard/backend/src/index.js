require("dotenv").config()

const compression = require("compression")
const cors = require("cors")
const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")

const employeeRouter = require("./routes/index")
const connectDb = require("./utils/connectDb")

const app = express()

app.use(express.json())
app.use(cors())
app.use(compression())
app.use(helmet())

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"))

connectDb()

app.use("/employee", employeeRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port: ${PORT} `))
