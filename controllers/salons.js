const Salon = require("../models/Salon");

// @desc get all salons
// @route GET /api/v1/salons
// @access Public
exports.getSalons = async (req, res, next) => {
  try {
    const salons = await Salon.find();

    return res.status(200).json({
      success: true,
      count: salons.length,
      data: salons
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server Error"
    });
  }
};

// @desc create a salon
// @route Post/api/v1/salons
// @access Public
exports.addSalon = async (req, res, next) => {
  try {
    const salon = await Salon.create(req.body);

    return res.status(200).json({
      success: true,
      data: salon
    });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({ error: "This salon already exists" });
    }
    res.status(500).json({
      error: "Server Error"
    });
  }
};
