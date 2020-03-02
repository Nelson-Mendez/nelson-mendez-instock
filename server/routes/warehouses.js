const express = require("express");
const router = express.Router();
const locations = require("../data/locations.json");

router.get("/", (req, res) => {
  res.send(locations);
});

module.exports = router;