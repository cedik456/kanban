const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.end("This is from the task route");
});

module.exports = router;
