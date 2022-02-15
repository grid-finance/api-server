const express = require('express');
const waitlistController = require('../../controllers/waitlist.controller');

const router = express.Router();

router.route('/').post(waitlistController.addToWaitlist);

module.exports = router;
