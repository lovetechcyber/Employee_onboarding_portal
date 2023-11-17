const JWT = require("jsonwebtoken")
const jwtKey = process.env.JWT_SECRET

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ success: false, message: "Authentication Failed" })
  }

  const token = authHeader.split(" ")[1]

  try {
    const payload = JWT.verify(token, jwtKey)
    // req.body.user = { userId: payload.userId }
    req.userId = payload.userId
    next()
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Authentication Failed" })
  }
}

module.exports = userAuth
