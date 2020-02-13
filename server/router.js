var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Returning / response");
});

router.get("/hello", (req, res) => {
  res.send("Returning hello response");
});

module.exports = router;

