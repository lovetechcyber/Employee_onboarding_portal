const hrStaff = require('../models/hrStaff')

const updateHrStaff = async (req, res, next) => {
    
}

const getHrStaff = async (req, res, next) => {
    try {
        const admin = await hrStaff.findById({_id:req.body.user.userId})
        admin.password = undefined
        if (!admin) {
            return res.status(200).send({
                message: "User not found",
                success: false
            })
        } else {
            res.status(200).send({
                success: true,
                data: admin
            })
        }
    } catch (error) {
        next('Auth Error')
    }
}

module.exports = { updateHrStaff, getHrStaff }