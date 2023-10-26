const User = require("../models/user")
const { createToken } = require("../utils/token")

const loginHandler = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email }).populate("CompanyInfo").exec()

    if (!user) {
      res.status(404)
      throw new Error("wrong username or password")
    }

    if (await user.isValidPassword(password)) {
      res.status(404)
      throw new Error("wrong username or password")
    }

    const token = createToken(user._id)

    res.status(200).json({ token, user, message: "Login Successful" })
  } catch (error) {
    throw new Error("Failed to login user")
  }
}

module.exports = { loginHandler }
