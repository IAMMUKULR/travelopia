const Trip = require("../models/trip.models");

const createTrip = async (payload) => {
  const {
    area,
    interests,
    no_of_travelers,
    budget_per_person,
    fullName,
    email,
    phoneNumber,
    tripDuration,
    when,
    planningStage,
  } = payload;

  const trip = await Trip.create({
    area,
    interests,
    no_of_travelers,
    budget_per_person,
    fullName,
    email,
    phoneNumber,
    tripDuration,
    when,
    planningStage,
  });

  return trip;
};

const getallWanderlust = async (types) => {
  const trip = await Trip.find();
  return trip;
};

module.exports = { createTrip, getallWanderlust };
