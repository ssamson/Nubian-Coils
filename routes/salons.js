const express = require("express");
const { getSalons, addSalon } = require("../controllers/salons");
const router = express.Router();

router.route("/").get(getSalons);

router
  .route("/")
  .get(getSalons)
  .post(addSalon);
module.exports = router;
