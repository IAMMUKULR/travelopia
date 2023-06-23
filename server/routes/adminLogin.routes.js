const router = require("express").Router();
const admin = require("../controllers/adminLogin.controllers");

router.post("/login", admin);

module.exports = router;
