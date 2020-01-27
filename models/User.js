const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  displayName: { type: String, default: "Anonymous" },
  salonName: { type: String, default: "" },
  accountType: { type: String, required: true },
  locationName: { type: String, default: "" },
  joinDate: { type: Date, default: Date.now() },
  favoriteHairStyle: { type: String, default: "" },
  streetName: { type: String, default: "" },
  cityName: { type: String, default: "" },
  stateName: { type: String, default: "" },
  zipCode: { type: String, default: "" },
  phoneNumber: { type: Number, default: "" },
  salonWebsite: { type: String, default: "" },
  salonServices: { type: Array, default: "" },
  salonAbout: { type: String, default: "" },
  hairSalonPics: { type: String, default: "" }
});

UserSchema.index({
  salonName: "text",
  streetName: "text",
  cityName: "text",
  stateName: "text",
  zipCode: "text"
});

module.exports = mongoose.model("User", UserSchema);
