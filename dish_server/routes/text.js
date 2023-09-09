require("dotenv").config();
const express = require("express");
const router = express.Router();
const sendText = require("../controllers/textController.js");
router.get("/text", sendText);
module.exports = router;
