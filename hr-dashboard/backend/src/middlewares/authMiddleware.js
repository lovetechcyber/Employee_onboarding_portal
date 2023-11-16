const JWT = require('jsonwebtoken')
const jwtKey = process.env.JWT_SECRET

const userAuth = async(req, res) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).send({ success: false, message: "Authentication Failed"})
    }

    const token = authHeader.split(' ')[1]

    try {
        const payload = JWT.verify(token, jwtKey)
        req.body.user = { userId: payload.userId }
        return res.status(200).send({ success: true, message: "Authentication Success"})
    } catch (error) {
        return res.status(400).send({ success: false, message: "Authentication Failed"})
    }
}

module.exports = userAuth