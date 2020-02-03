const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const SalonSchema = new mongoose.Schema({
  salonId: {
    type: String,
    required: [true, "Please add a store ID"],
    unique: true,
    trim: true,
    maxlength: [10, "Salon ID must be less than 10 chars"]
  },
  address: {
    type: String,
    required: [true, "Please add an address"]
  },
  location: {
    type: {
      type: String,
      enum: ["Point"]
    },
    coordinates: {
      type: [Number],
      index: "2dsphere" //2dsphere supports queries that calculate geometries on earth-like sphere
    },
    formattedAddress: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// geocode & create location
SalonSchema.pre("save", async function(next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };

  // do not save address
  this.address = undefined;
  next();
});

module.exports = mongoose.model("Salon", SalonSchema);
