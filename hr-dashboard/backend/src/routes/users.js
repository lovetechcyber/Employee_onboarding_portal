const express = require("express");
const router = express.Router();
const { createEmployee, getEmployees } = require("../controllers/users");

router.get("/all", getEmployees);
router.post("/register", createEmployee);

module.exports = router;
