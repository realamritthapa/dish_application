require("dotenv").config();
const accountSid = `${process.env.TWILIO_ACCOUNT_SID}`;
const authToken = `${process.env.TWILIO_AUTH_TOKEN}`;
const myNumber = `${process.env.TWILIO_PHONE_NUMBER}`;
const client = require("twilio")(accountSid, authToken);
const sendText = (req, res) => {
  const clientNumber = req.query.number;
  const dataToSend = req.query.data.split(",");
  const dataFormated = dataToSend
    .map((item, index) => `${index + 1}. ${item}`)
    .join("\n");
  const foodName = req.query.foodName;
  if (typeof dataFormated !== "string") {
    return res.sendStatus(400); // Bad request due to invalid data type or client number mismatch
  }

  client.messages
    .create({
      body: "Ingredients for " + foodName + ":" + "\n\n" + dataFormated,
      from: `+${myNumber}`,
      to: `+${clientNumber}`,
    })
    .then((message) => {
      if (
        message.status === "sent" ||
        message.status === "queued" ||
        message.status === "delivered"
      ) {
        res.sendStatus(200);
      }
    })
    .catch((e) => {
      res.sendStatus(e.status);
    });
};

module.exports = sendText;
