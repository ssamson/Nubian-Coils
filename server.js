const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

// load env variables
dotenv.config({ path: "./config/config.env" });

// init express
const app = express();

// body parser
app.use(express.json());

// enable cors
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, "public")));

const connectDB = require("./config/db");

// connect to database
connectDB();

app.use(express.json({ extended: false }));

// Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/image", require("./routes/image"));
app.use("/api/v1/salons", require("./routes/salons"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3100;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
//
