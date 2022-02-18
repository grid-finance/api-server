const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { waitlistService } = require('../services');

const addToWaitlist = catchAsync(async (req, res) => {
  const email = await waitlistService.addToWaitlist(req.body);
  res.status(httpStatus.CREATED).send(email);
});

const getWaitlist = catchAsync(async (req, res) => {
  const waitlist = await waitlistService.getWaitlist();
  if (!waitlist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Waitlist is empty.');
  }
  res.status(httpStatus.OK).send(waitlist);
});

module.exports = {
  addToWaitlist,
  getWaitlist,
};
