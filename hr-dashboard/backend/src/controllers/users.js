const User = require("../models/users");

const createEmployee = async (req, res) => {
  try {
    const newEmployee = new User({ ...req.body });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getEmployees = async (req, res) => {
  try {
    const allEmployees = await User.find();
    return res
      .status(200)
      .json({ message: "Employees fetched successfully", allEmployees });
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { createEmployee, getEmployees };
