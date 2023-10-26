const { Router } = require("express")

const { loginHandler } = require("../controllers/auth")

const router = Router()

router.post("/login", loginHandler)

module.exports = router
