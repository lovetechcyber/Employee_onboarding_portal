require('dotenv').config()
const mongoose = require('mongoose')
// mongoose.set('strictQuery', false)
const database = process.env.DATABASE

const connectDatabase = async() => {
    try {
        const db = await mongoose.connect(database)
        console.log(`Database linked to ${db.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
}

module.exports = connectDatabase