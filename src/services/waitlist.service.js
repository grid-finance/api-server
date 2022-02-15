const httpStatus = require('http-status');
const { Waitlist } = require('../models');
const ApiError = require('../utils/ApiError');
const validator = require('email-validator');

/**
 * Create a user
 * @param {Object} waitlistBody
 * @returns {Promise<Waitlist>}
 */
const addToWaitlist = async (waitlistBody) => {
  if (await Waitlist.emailAlreadyExists(waitlistBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already on the waitlist');
  } else {
    if (validator.validate(waitlistBody.email)) {
      return Waitlist.create(waitlistBody);
    } else {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Email format is incorrect');
    }
  }
};

module.exports = {
  addToWaitlist,
};
