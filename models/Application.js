const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({

  name: String,

  email: String,

  skills: String,

  resume: String,

  jobId: String,

  appliedAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model(
  "Application",
  ApplicationSchema
);