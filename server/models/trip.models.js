const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    area: {
      type: [],
      required: true,
    },
    interests: {
      type: [],
      required: true,
    },
    no_of_travelers: {
      type: String,
      required: true,
    },
    budget_per_person: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    tripDuration: {
      type: String,
      required: true,
    },
    when: {
      type: String,
      required: true,
    },
    planningStage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Trip = new mongoose.model("trip", tripSchema);

module.exports = Trip;
