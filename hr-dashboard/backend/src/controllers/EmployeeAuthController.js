const Employee = require('../models/employee')

const registerEmployee = async(req, res, next) => {
    try {
        const { id, fullName, mail, password } = req.body
        if(!fullName) {
            next("Name is Required")
        }
        if (!mail) {
            next("Email is Required")
        }
        if (!password) {
            next("Password is Required")
        }
        const existingUser = await Employee.findOne({ mail })
        if (existingUser) {
            next("Email Already Exists, Please login")
        }
        const user = await Employee.create({ fullName, mail, password, createdBy: id })
        const token =  user.createJWT()
        res.status(201).send({ 
            success: true, 
            message: 'User Created Successfully', 
            user, 
            token 
        })
    } catch (error) {
        next(error)
    }
}

const loginEmployee = async(req, res, next) => {
    try {
        const { mail, password } = req.body
        if (!mail || !password) {
            next("All fields are required")
        }
        const user = await Employee.findOne({mail}).select("+password")
        if (!user) {
            next("Invalid Credentials")
        }
        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            next("Invalid Credentials")
        }
        user.password = undefined
        const token = user.createJWT()
        res.status(200).send({ 
            success: true, 
            message: "Login Successful",
            user, 
            token
        })
    } catch (error) {
        next("Error Signing In")
    }
}

const logoutEmployee = async(req, res, next) => {

}


module.exports = { registerEmployee, loginEmployee, logoutEmployee }