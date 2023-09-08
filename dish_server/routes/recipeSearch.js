require("dotenv").config();
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch").default;
const recipeSearch = require("../controllers/recipeSearchController.js");

router.get("/recipe", recipeSearch);

module.exports = router;
