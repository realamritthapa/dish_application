const fetch = require("node-fetch").default;
const getAutoComplete = (req, res) => {
  const search = req.query.data;
  fetch(
    `https://api.edamam.com/auto-complete?app_id=${process.env.EDAMAM_DATA_ID}&app_key=${process.env.EDAMAM_DATA_KEY}&q=${search}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
};
module.exports = getAutoComplete;
