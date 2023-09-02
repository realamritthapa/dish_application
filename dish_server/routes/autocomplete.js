const express = require("express");
const router = express.Router();
require("dotenv").config();
const fetch = require("node-fetch").default;
router.get("/autocomplete", (req, res) => {
  const search = req.query.data;
  fetch(
    `https://api.edamam.com/auto-complete?app_id=${process.env.EDAMAM_DATA_ID}&app_key=${process.env.EDAMAM_DATA_KEY}&q=${search}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });

  // let suggestions = data.map((result) => ({ label: result }));
});

module.exports = router;
