import React, { useState } from "react";
import { Autocomplete, IconButton, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import style from "./Search.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Padding, Search } from "@mui/icons-material";

async function getSuggestions(search) {
  console.log(search);
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

export default function SearchBar({ onSearch }) {
  const [suggestions, setSuggestions] = useState([]);
  const [searchValue, setValue] = useState("");
  const [display, setDisplay] = useState(false);

  const nagivate = useNavigate();

  function dataSetter(event) {
    event.preventDefault();
    setDisplay(true);
    onSearch(searchValue);
    nagivate("/dishes");
  }

  async function handleChange(event) {
    event.preventDefault();
    const { value } = event.target;
    setValue(value);
    const result = await getSuggestions(value);
    setSuggestions(result);
  }

  return (
    <div>
      <Autocomplete
        className={style.search_bar}
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
                  <Link to={"/dishes"}>
                    <IconButton onClick={dataSetter}>
                      <SearchIcon />
                    </IconButton>
                  </Link>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
}
