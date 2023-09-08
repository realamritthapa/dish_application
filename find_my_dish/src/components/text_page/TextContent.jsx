import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Button } from "@mui/material";
import "react-phone-input-2/lib/style.css";
import "./textContent.css";
export default function TextContent() {
  const [number, setNumber] = useState("");
  function handleChange(value) {
    setNumber(value);
  }
  function handleClick() {
    console.log("hello");
    console.log(number);

    console.log(typeof number);
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
      </div>
    </div>
  );
}
