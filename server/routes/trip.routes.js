const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");
const {
  CreateTrip,
  getAllWanderlust,
} = require("../controllers/trip.controllers");

router.post("/create-trip", CreateTrip);
router.get("/wanderlusters", authMiddleware, getAllWanderlust);

module.exports = router;
