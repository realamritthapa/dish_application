import React, { useEffect, useState } from "react";
import "./displayInfo.css";
import { Button } from "@mui/material";
import Ingredient from "./Ingredient";
import OtherInfo from "./OtherInfo";
export default function DishInfo({ info }) {
  const [showIng, setShow] = useState(false);
  const ingredients = info.ingredients;
  const [buttonTxt, setText] = useState("Ingredients");
  useEffect(() => {
    setShow(false);
  }, [info]);
  function handleClick() {
    setShow(!showIng);
    setText(showIng ? "Ingredients" : "Info");
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
                  width: "100px",
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
              onClick={handleClick}
            >
              {buttonTxt}
            </Button>
          </div>
        </div>

        {showIng ? (
          <Ingredient data={ingredients} />
        ) : (
          <OtherInfo data={info} />
        )}
      </div>
    </div>
  );
}
