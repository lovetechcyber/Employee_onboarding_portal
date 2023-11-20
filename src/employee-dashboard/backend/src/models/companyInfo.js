const { model, Schema } = require("mongoose")

const companyInfoSchema = new Schema(
  {
    employee: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    office: { type: String, required: true },
    userID: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
)

const CompanyInfo = model("CompanyInfo", companyInfoSchema)

module.exports = CompanyInfo
