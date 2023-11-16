const express = require('express')
const router = express.Router()

const { updateHrStaff, getHrStaff } = require('../controllers/hrStaffController')

router.put('/update-staff', updateHrStaff)
router.post('/get-staff', getHrStaff)

module.exports = router