const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const taskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    dueDate: { type: Date },
    priority: { type: String, enum: ['Low', 'Medium', 'High'] },
    completed: { type: Boolean, default: false },
}); 

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: Boolean, default: false },
  });

const employeeSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    profilePicture: {
      data: Buffer,
      contentType: String,
      filename: String,
      size: Number,
    },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    dateOfBirth: { type: Date },
    nationality: { type: String },
    phoneNumber: { type: Number },
    address: { type: String },
    educationDetails: [{
      degree: { type: String },
      institution: { type: String },
    }],
    department: { type: String },
    position: { type: String },
    employmentType: { type: String, enum: ['Full-time', 'Part-time', 'Contract'] },
    dateOfJoining: { type: Date },
    salary: { type: Number },
    employeeStatus: { type: String, enum: ['Active', 'Inactive', 'On Leave'] },
    exitDate: { type: Date },
    terminationReason: { type: String },
    workExperience: [{
      company: { type: String },
      position: { type: String },
      duration: { type: String },
    }],
    leaveBalance: { type: Number },
    leaveHistory: [{
      startDate: { type: Date },
      endDate: { type: Date },
      leaveType: { type: String },
    }],
    tasks: [taskSchema],
    questions: [questionSchema],
    attendance: [{
      date: { type: Date },
      timeIn: { type: Date },
      timeOut: { type: Date },
    }],
    performanceRatings: [{ type: Number }],
    reviewDates: [{ type: Date }],
    goalsAndObjectives: [{ type: String }],
    trainingPrograms: [{ type: String }],
    skillsDevelopment: [{ type: String }],
    documents: [{
      documentType: { type: String },
      documentPath: { type: String },
    }],
    insuranceInformation: { type: String },
    bonusInformation: { type: String },
    awardsReceived: [{ type: String }],
    employeeOfTheMonth: { type: Boolean },
    selfAssessment: { type: String },
    managerFeedback: { type: String },
    createdBy: { type: mongoose.Types.ObjectId, ref: "Employee"},
    status: { type: String, enum: ["Pending", "Successful"], default: "Pending"}
  }, { timestamps: true });
  

employeeSchema.pre('save', async function(next) {
    try {
      const salt = await bcrypt.genSalt(10)
      this.password = await bcrypt.hash(this.password, salt)

        if (this.isModified('employeeStatus') && (this.employeeStatus === 'Inactive' || this.employeeStatus === 'Terminated')) {
            this.exitDate = new Date();
        }
        next();
    } catch (error) {
        next(error);
    }
});

const hrEmployee = mongoose.model('Employee', employeeSchema);

module.exports = hrEmployee;
