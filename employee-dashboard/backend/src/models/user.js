/* eslint-disable func-names */
const bcrypt = require("bcrypt")
const { model, Schema } = require("mongoose")

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lsatName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  }
  return next()
})

userSchema.methods.isValidPassword = async function (passwordInput) {
  return bcrypt.compare(passwordInput, this.password)
}

const User = model("User", userSchema)

module.exports = User
