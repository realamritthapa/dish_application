import React, { useEffect, useState } from "react";
import Logo from "../app_logo/Logo";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import DishDisplay from "../scroll_bar/DishDisplay";
import "./display.css";
import style from "./display.module.css";
import SearchIcon from "@mui/icons-material/Search";

async function getSuggestions(search) {
  let data = await fetch(
    `https://dish-backend.onrender.com/autocomplete?data=${search}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  let suggestions = data.map((result) => ({ label: result }));
  return suggestions;
}
export default function Display({ data }) {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");
  const [displayData, setDisplayData] = useState(data);

  async function handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    setValue(value);
    const result = await getSuggestions(value);
    setSuggestions(result);
  }
  useEffect(() => {
    handleClick();
  }, [displayData]);

  function handleClick() {
    setDisplayData(value);
  }
  return (
    <div className='display'>
      <div className='dish-header'>
        <Logo />
        <Autocomplete
          className={style.mini_bar}
          options={suggestions}
          autoHighlight
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              type='text'
              onChange={handleChange}
              label='Search Dish'
              variant='outlined'
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClick}>
                      <SearchIcon fontSize='large' />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </div>

      <DishDisplay data={displayData} />
    </div>
  );
}
