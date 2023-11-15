const hrEmployee = require('../models/employee')

const registerHrEmployee = async(req, res) => {
    try {
        const { fullName, email } = req.body
        if (!fullName || !email) {
            return res.status(400).send({ success: false, message: "Please Complete All Fields"})
        }
        const employee = await hrEmployee.create(req.body)
        res.status(200).json({ success: true, message: 'Employee Registered Succ', employee})

    } catch (error) {
        console.error(error);
        res.status(500).json({
        success: false,
        message: 'Error completing registration',
        error: error.message,
    });
    }
}

const getAllEmployees = async(req, res) => {
    try {
        const employees = await hrEmployee.find({ createdBy: req.user.userId})
        res.status(200).json({ totalEmployees: employees.length, employees})
    } catch (error) {
        console.error(error);
        res.status(500).json({
        success: false,
        message: 'Error completing registration',
        error: error.message,
        });
    }
}

const getEmployeeDetails = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = { registerHrEmployee, getAllEmployees, getEmployeeDetails}

 // const user = await User.findById(req.user.userId);
    // user.additionalDetails = additionalDetails;
    // const updatedUser = await user.save();
    // res.status(200).json({
    //   success: true,
    //   message: 'Registration completed successfully',
    //   user: updatedUser,
    // });