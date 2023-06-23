const { createTrip, getallWanderlust } = require("../services/trip.services");

const CreateTrip = async (req, res) => {
  try {
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
    } = req.body;

    console.log(req.body);
    const trip = createTrip({
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
    res.status(200).json({
      response: true,
      message: "Trip Created Successfully",
      trip: trip,
    });
  } catch (err) {
    res.status(500).json({
      response: true,
      message: "Internal Server Error",
      err,
    });
  }
};

const getAllWanderlust = async (req, res) => {
  try {
    const wanderlusters = await getallWanderlust();
    res.status(200).json({
      response: true,
      wanderlusters: wanderlusters,
    });
  } catch (err) {
    res.status(500).json({
      response: true,
      message: "Internal Server Error",
      err,
    });
  }
};

module.exports = { CreateTrip, getAllWanderlust };
