const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { waitlistService } = require('../services');

const addToWaitlist = catchAsync(async (req, res) => {
  const email = await waitlistService.addToWaitlist(req.body);
  res.status(httpStatus.CREATED).send(email);
});

module.exports = {
  addToWaitlist,
};
