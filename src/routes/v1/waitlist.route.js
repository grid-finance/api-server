const express = require('express');
const auth = require('../../middlewares/auth');
const waitlistController = require('../../controllers/waitlist.controller');

const router = express.Router();

router
  .route('/')
  .post(waitlistController.addToWaitlist)
  .get(auth('admin'), waitlistController.getWaitlist);

module.exports = router;
