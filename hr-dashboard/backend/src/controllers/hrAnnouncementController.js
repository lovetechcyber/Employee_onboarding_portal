const Announcement = require('../models/announcement')

const addAnnouncement = async (req, res, next) => {
    try {
        const { title, message, date } = req.body
        if (!title || !message || !date) {
            next('Please Complete All Fields')
        }
        const announcement = await Announcement.create(req.body)
        res.status(201).json({ success: true, message: 'Announcement Created Successfully', announcement})
    } catch (error) {
        next(error)
    }
}

const getAnnouncements = async (req, res, next) => {
    try {
        // Retrieve and send announcement data
        const announcements = await Announcement.find();
        res.status(200).json({ success: true, announcements });
    } catch (error) {
        next(error);
    }
};

const updateAnnouncements = async (req, res, next) => {
    try {
        
    } catch (error) {
        next('error')
    }
}

const deleteAnnouncements = async (req, res, next) => {
    try {
        
    } catch (error) {
     next('error')   
    }
}

module.exports = { addAnnouncement, getAnnouncements, updateAnnouncements, deleteAnnouncements}