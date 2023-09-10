import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Button, Icon } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import "react-phone-input-2/lib/style.css";
import "./textContent.css";
import { Error } from "@mui/icons-material";
export default function TextContent({ data, name }) {
  const [number, setNumber] = useState("");
  const [confirmation, setConfirmation] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  let foodList;
  function handleChange(value) {
    setNumber(value);
  }
  async function handleClick() {
    setButtonClicked(!buttonClicked);
    foodList = data.map((obj) => obj.food);
    try {
      const response = await fetch(
        `https://dish-server.onrender.com/text/?number=${number}&data=${foodList}&foodName=${name}`
      );
      console.log(response);
      if (!response.ok) {
        setConfirmation(response.status);
        throw new Error("Network response was on ok");
      }
      setConfirmation(response.status);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className='text-box'>
      <div className='text-instruction'>
        Enter the number you would like to send the ingredients list to below
      </div>
      <div className='text-field'>
        <div>
          <PhoneInput
            onlyCountries={["us"]}
            country={"us"}
            regions={["america"]}
            value={number}
            onChange={handleChange}
          />
        </div>

        <Button onClick={handleClick} variant='contained'>
          Send
        </Button>
        {buttonClicked &&
          (confirmation === 200 ? <CheckCircleIcon /> : <SmsFailedIcon />)}
      </div>
    </div>
  );
}
