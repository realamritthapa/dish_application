require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const autocomplete = require("./routes/autocomplete");
const recipe = require("./routes/recipeSearch");

app.use(cors());
app.use("/", autocomplete);
app.use("/", recipe);

app.listen(PORT, () => {
  console.log("Server has begun");
});
