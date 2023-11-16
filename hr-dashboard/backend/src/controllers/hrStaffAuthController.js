const Admin = require('../models/hrStaff')

const registerAdmin = async(req, res, next) => {
    try {
        const { name, email, password } = req.body
        if(!name) {
            next("Name is Required")
            // return res.status(400).send({ success: false, message: "Please provide name"})
        }
        if (!email) {
            next("Email is Required")
            // return res.status(400).send({ success: false, message: 'please provide email'})
        }
        if (!password) {
            next("Password is Required")
            // return res.status(400).send({success:false, message: 'please provide password'})
        }
        const existingUser = await Admin.findOne({ email })
        if (existingUser) {
            next("Email Already Exists, Please login")
        }
        const user = await Admin.create({ name, email, password })
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

const loginAdmin = async(req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            next("All fields are required")
        }
        const user = await Admin.findOne({email}).select("+password")
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

const logoutAdmin = async(req, res) => {

}


module.exports = { registerAdmin, loginAdmin, logoutAdmin }