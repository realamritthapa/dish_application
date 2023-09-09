import React, { useEffect, useState } from "react";
import "./displayInfo.css";
import { Button } from "@mui/material";
import Ingredient from "./Ingredient";
import OtherInfo from "./OtherInfo";
import TextContent from "../text_page/TextContent";
export default function DishInfo({ info }) {
  const [showIng, setShow] = useState(false);
  const [textInfo, setTextInfo] = useState(true);
  const ingredients = info.ingredients;
  const [buttonTxt, setText] = useState("Ingredients");
  useEffect(() => {
    setShow(false);
  }, [info]);
  function handleClick() {
    setShow(!showIng);
    setText(showIng ? "Ingredients" : "Info");
  }

  function showText() {
    setTextInfo(!textInfo);
  }
  return (
    <div className='dishinfo-container'>
      <h1 className='food-label'> {info.label}</h1>
      <div className='display-box'>
        <div className='image-button'>
          <img className='main-image' src={info.image} loading='lazy' />{" "}
          <div className='recipe-btn'>
            <a href={info.url} target='_blank'>
              <Button
                sx={{
                  ":hover": { bgcolor: "#A1CCD1" },
                  backgroundColor: "#c3edc0",
                  color: "black",
                }}
                variant='contained'
              >
                Recipe
              </Button>
            </a>
            <Button
              sx={{
                ":hover": { bgcolor: "#A1CCD1" },
                backgroundColor: "#c3edc0",
                color: "black",
              }}
              variant='contained'
              onClick={showText}
            >
              Text
            </Button>
            <Button
              sx={{
                ":hover": { bgcolor: "#A1CCD1" },
                backgroundColor: "#c3edc0",
                color: "black",
              }}
              variant='contained'
              onClick={handleClick}
            >
              {buttonTxt}
            </Button>
          </div>
        </div>

        {textInfo ? (
          <TextContent data={ingredients} name={info.label} />
        ) : showIng ? (
          <Ingredient data={ingredients} />
        ) : (
          <OtherInfo data={info} />
        )}
      </div>
    </div>
  );
}
