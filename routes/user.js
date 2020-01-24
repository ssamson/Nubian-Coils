const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

const router = express.Router();

const auth = require("../middleware/auth");
const User = require("../models/User");

// Load user
router.get("/load", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
});

// Login (SignIn)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // check if username is correct
  let user = await User.findOne({ email });
  if (!user) {
    res.json(null);
  } else {
    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.json(null);
    } else {
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: "1d"
        },
        (error, token) => {
          if (error) {
            throw error;
          }
          res.json({ token, user });
        }
      );
    }
  }
});

//Register(SignUp)
router.post("/", async (req, res) => {
  const newUser = new User({ ...req.body });

  const user = await User.findOne({ email: req.body.email });

  if (user) {
    res.json(null);
    return;
  }
  // Create salt & hash
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      throw err;
    }
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) {
        throw err;
      }
      newUser.password = hash;
      const user = await newUser.save();
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "1d" },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token, user });
        }
      );
    });
  });
});

// Find user by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
});

// Update user
router.put("/", async (req, res) => {
  const newUser = req.body;
  await User.findByIdAndUpdate(newUser._id, newUser);
  res.json(newUser);
});

module.exports = router;
