const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const jwtKey = process.env.JWT_SECRET

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "Password length should be more than 6 characters"],
        select: true
    }
})

adminSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

adminSchema.methods.comparePassword = async function(userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password)
    return isMatch
}

adminSchema.methods.createJWT = function() {
    return JWT.sign({ userId:this._id}, jwtKey, {expiresIn: '1d'})
}

module.exports = mongoose.model('Admin', adminSchema)