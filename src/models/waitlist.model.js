const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const waitlistSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
waitlistSchema.plugin(toJSON);

waitlistSchema.statics.emailAlreadyExists = async function (email) {
  const waitlist = await this.findOne({ email });
  return !!waitlist;
};

/**
 * @typedef Waitlist
 */
const Waitlist = mongoose.model('Waitlist', waitlistSchema);

module.exports = Waitlist;
