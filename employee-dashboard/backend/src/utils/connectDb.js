const mongoose = require("mongoose")

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`db connected on ${conn.connection.host}`)
  } catch (error) {
    console.error("failed to connect to db: ", error)
    process.exit(1)
  }
}

module.exports = connectDb
