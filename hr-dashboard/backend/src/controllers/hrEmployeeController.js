const hrEmployee = require('../models/employee')

const registerHrEmployee = async(req, res, next) => {
    try {
        const { fullName, email } = req.body
        if (!fullName || !email) {
            next("Please Complete All fields")
        }
        const employee = await hrEmployee.create(req.body)
        res.status(200).json({ success: true, message: 'Employee Registered Succ', employee})
    } catch (error) {
        next(error)
    }
}

const getAllEmployees = async(req, res, next) => {
    try {
        const employees = await hrEmployee.find({ createdBy: req.user.userId})
        res.status(200).json({ totalEmployees: employees.length, employees})
    } catch (error) {
        next(error)
    }
}

const updateEmployee = async(req, res, next) => {
    try {
        const {id} = req.params
        const { fullName, email } = req.body
        if (!fullName || !email) {
            next("Please Provide All Fields")
        }
        const employee = await hrEmployee.findOne({_id:id})
        if (!employee) {
            next(`No Employee found with this id ${id}`)
        }
        if (!req.user.userId === employee.createdBy.toString()) {
            return next("You're not authorized to update this employee")
        }
        const updateEmployee = await hrEmployee.findOneAndUpdate({_id:id}, req.body, {new:true})
        res.status(200).json({ updateEmployee})
    } catch (error) {
        next(error)
    }
}

const deleteEmployee = async(req, res, next) => {
    try {
        const {id} = req.params
        const employee = await hrEmployee.findOne({id:id})
        if (!employee) {
            next("No Employee found with this id ${id}")
        }
        if (!req.user.userId === employee.createdBy.toString()) {
            next("You're not authorized to delete this employee")
            return
        }
        await employee.deleteOne()
        res.status(200).json({ message: 'Success, Employee Deleted'})
    } catch (error) {
        next(error)
    }
}

module.exports = { registerHrEmployee, getAllEmployees, deleteEmployee, updateEmployee}

 // const user = await User.findById(req.user.userId);
    // user.additionalDetails = additionalDetails;
    // const updatedUser = await user.save();
    // res.status(200).json({
    //   success: true,
    //   message: 'Registration completed successfully',
    //   user: updatedUser,
    // });