const HrUser = require("../models/hrStaff")

const hrAuth = async (req, res, next) => {
  if (!req.userId) {
    return res
      .status(401)
      .json({ success: false, message: "Authentication Failed" })
  }

  try {
    const user = HrUser.findById(req.userId)

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Authentication Failed" })
    }

    req.user = user
    next()
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Authentication Failed" })
  }
}

module.exports = hrAuth
