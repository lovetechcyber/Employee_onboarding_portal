const mongoose = require('mongoose');
const Schema = mongoose.Schema

const announcementSchema = new Schema({
    title: {
        type: String, 
        required: true
    }, 
    message: {
        type: String, 
        required: true
    },
    date: {
        type: Date, 
        required: true
    }

})

module.exports = mongoose.model('Announcements', announcementSchema)