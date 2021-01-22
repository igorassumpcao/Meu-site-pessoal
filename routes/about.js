const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("about");
});

//localhost:3000/about

module.exports = router;
