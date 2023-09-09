require("dotenv").config();
const accountSid = `${process.env.TWILIO_ACCOUNT_SID}`;
const authToken = `${process.env.TWILIO_AUTH_TOKEN}`;
const myNumber = `${process.env.TWILIO_PHONE_NUMBER}`;
const client = require("twilio")(accountSid, authToken);
const sendText = (req, res) => {
  const clientNumber = req.query.number;
  const dataToSend = req.query.data;
  const foodName = req.query.foodName;
  if (typeof dataToSend !== "string" || clientNumber !== TWILIO_PHONE_NUMBER) {
    return res.sendStatus(400); // Bad request due to invalid data type or client number mismatch
  }

  client.messages
    .create({
      body: `Ingredients for ${foodName}:
        ${dataToSend}`,
      from: `+${myNumber}`,
      to: `+${clientNumber}`,
    })
    .then((message) => {
      console.log(message.sid);
      res.sendStatus(200);
    })
    .catch((e) => {
      console.log(e);
      res.sendStatus404;
    })
    .done();
};

module.exports = sendText;
