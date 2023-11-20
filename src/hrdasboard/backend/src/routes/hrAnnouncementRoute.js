const express = require('express')
const router = express.Router()

const { 
    addAnnouncement, 
    getAnnouncements, 
    updateAnnouncements, 
    deleteAnnouncements
} = require('../controllers/hrAnnouncementController')

router.post('/add-announcement', addAnnouncement);
router.get('/get-announcements', getAnnouncements);

module.exports = router