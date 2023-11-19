const express = require("express")
const router = express.Router()

const auth = require("../middlewares/authMiddleware")
const hr = require("../middlewares/hrMiddleware")

const {
  updateHrStaff,
  getHrStaff,
} = require("../controllers/hrStaffController")

router.put("/update-staff", auth, hr, updateHrStaff)
router.post("/get-staff", auth, hr, getHrStaff)

module.exports = router
