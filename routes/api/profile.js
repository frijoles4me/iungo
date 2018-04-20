const express = require("express");
const router = express.Router();

// @route  GET api/profile/test
// @desc   Test profile route
// @acces  Public
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

module.exports = router;
