require('dotenv').config()
const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const helmet = require('helmet')

const hrAnnouncement = require('./src/routes/hrAnnouncementRoute')
const hrEmployeeRoute = require('./src/routes/hrEmployeeRoute')
const hrStaffAuthRoute = require('./src/routes/hrStaffAuthRoute')

const connectDatabase = require('./src/config/database')
const userAuth = require('./src/middlewares/authMiddleware')
const errorMiddleware = require('./src/middlewares/errorMiddleware')
connectDatabase()

server.use(cors())
server.use(express.json())
server.use(helmet())

server.use('/hr/auth', hrStaffAuthRoute)
server.use('/hr/employee', hrEmployeeRoute)
server.use('/hr/announcements', hrAnnouncement)

server.use(errorMiddleware)

server.get('/', userAuth, (req, res) => {
    res.send('<h1>Welcome to HR Dashboard Server</h1>');
})

server.listen(PORT, () => console.log(`The Server is live on Port ${PORT} `))