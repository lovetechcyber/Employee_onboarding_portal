const Admin = require('../models/hrStaff')

const registerAdmin = async(req, res) => {
    try {
        const { name, email, password } = req.body
        if(!name) {
            return res.status(400).send({ success: false, message: "Please provide name"})
        }
        if (!email) {
            return res.status(400).send({ success: false, message: 'please provide email'})
        }
        if (!password) {
            return res.status(400).send({success:false, message: 'please provide password'})
        }
        const existingUser = await Admin.findOne({ email })
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Email Already Created, Please Login'
            })
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
        console.log(error);
        res.status(400).send({
            message: 'Error in Registering User',
            success: false,
            error
        })
    }
}

const loginAdmin = async(req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({ success: false, message: "Please Provide All Fields"})
        }
        const user = await Admin.findOne({email}).select("+password")
        if (!user) {
            return res.status(400).send({ success: false, message: "Invalid Credentials"})
        }
        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return res.status(400).send({ success: false, message: "Invalid Username or Password"})
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
        console.log(error);
        res.status(400).send({
            message: 'Error Signing in',
            success: false,
            error
        })
    }
}

const logoutAdmin = async(req, res) => {

}


module.exports = { registerAdmin, loginAdmin, logoutAdmin }