const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {

  try {

    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {

      return res.json({
        message: "User Already Exists"
      });

    }

    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role
    });

    await user.save();

    console.log("User Registered");

    res.json({
      message: "User Registered Successfully"
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });

  }

});

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email
    });

    if (!user) {

      return res.status(400).json({
        message: "User Not Found"
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Password"
      });

    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      user
    });

  }

  catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;