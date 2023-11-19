const hrEmployee = require('../models/employee')

const uploadImage = async (req, res, next) => {
    try {
      const { filename, mimetype, size, buffer } = req.file;
      const { id } = req.params;
      const employee = await hrEmployee.findById(id);
      if (!employee) {
        return res.status(404).json({ success: false, message: 'Employee not found' });
      }
      employee.profilePicture = {
        data: buffer,
        contentType: mimetype,
        filename: filename,
        size: size,
      };
      await employee.save();
      res.status(200).json({ success: true, message: 'Image uploaded successfully' });
    } catch (error) {
      next('Error Uploading Image');
    }
  };
  
  
const registerHrEmployee = async(req, res, next) => {
    try {
        // const { fullName, email } = req.body
        // if (!fullName || !email) {
        //     next("Please Complete All fields")
        // }
        const employee = await hrEmployee.create(req.body)
        res.status(200).json({ success: true, message: 'Employee Registered Succ', employee})
    } catch (error) {
        next(error)
    }
}

const getAllEmployees = async(req, res, next) => {
    try {
        // const employees = await hrEmployee.find({ createdBy: req.user.userId})
        const employees = await hrEmployee.find()
        res.status(200).json({ totalEmployees: employees.length, employees})
    } catch (error) {
        next(error)
    }
}

const updateEmployee = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedEmployee = await hrEmployee.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedEmployee) {
        return res.status(404).json({ success: false, message: 'Employee not found' });
      }
      res.status(200).json({ success: true, message: 'Employee profile updated successfully', updatedEmployee });
    } catch (error) {
      next(error);
    }
  };
  

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

module.exports = { uploadImage, registerHrEmployee, getAllEmployees, deleteEmployee, updateEmployee}

 // const user = await User.findById(req.user.userId);
    // user.additionalDetails = additionalDetails;
    // const updatedUser = await user.save();
    // res.status(200).json({
    //   success: true,
    //   message: 'Registration completed successfully',
    //   user: updatedUser,
    // });