const express = require('express')
const userAuth = require('../middlewares/authMiddleware')
const router = express.Router()

const { 
        registerHrEmployee, 
        getAllEmployees, 
        updateEmployee, 
        deleteEmployee 
    } = require('../controllers/hrEmployeeController')


// router.get('/employee/:employeeId')
router.post('/create-employee', registerHrEmployee)
router.get('/get-employee', getAllEmployees)
router.patch('/update-employee/:id', updateEmployee)
router.delete('/delete-employee/:id', deleteEmployee)

module.exports = router