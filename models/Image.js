const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  name: { type: String },
  data: { type: Buffer },
  mimetype: { type: String, default: "" }
});

module.exports = mongoose.model("images", ImageSchema);
