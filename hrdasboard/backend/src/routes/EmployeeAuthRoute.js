const express = require('express')
const router = express.Router()

const { 
        registerEmployee, 
        loginEmployee, 
        logoutEmployee 
    } = require('../controllers/EmployeeAuthController')

router.post('/register', registerEmployee)
router.post('/login', loginEmployee)
router.post('/logout', logoutEmployee)


module.exports = router