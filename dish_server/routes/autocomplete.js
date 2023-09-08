require("dotenv").config();
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch").default;
const getAutoComplete = require("../controllers/autocompleteController.js");

router.get("/autocomplete", getAutoComplete);

module.exports = router;
