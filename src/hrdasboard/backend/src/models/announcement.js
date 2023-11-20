const { model, Schema } = require("mongoose");

const announcementSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = model("Announcements", announcementSchema);
