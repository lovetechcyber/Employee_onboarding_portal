const express = require('express')
const userAuth = require('../middlewares/authMiddleware')
const router = express.Router()

const { registerHrEmployee, getAllEmployees, getEmployeeDetails } = require('../controllers/hrEmployeeController')


router.get('/get-employees', getAllEmployees)
router.get('/employee/:employeeId')
router.post('/create-employee', registerHrEmployee)


module.exports = router