const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongo");

async function connectDB() {
  if (process.env.NODE_ENV === "production") {
    const username = process.env.MLAB_USERNAME;
    const password = process.env.MLAB_PASSWORD;
    let connection = `mongodb://${username}:${password}${db}`;
    await mongoose.connect(connection, {
      useNewURLParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  } else {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  }
}

module.exports = connectDB;
