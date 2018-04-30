const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//load profile model
const profile = require("../../models/Profile");

//load user profile
const User = require("../../models/User");

// @route  GET api/profile/test
// @desc   Test profile route
// @acces  Public
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

// @route  GET api/profile
// @desc   get current user profile
// @acces  private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
