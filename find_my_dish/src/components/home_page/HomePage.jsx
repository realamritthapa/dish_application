import React from "react";
import SearchBar from "../search/SearchBar";
import "./home.css";
export default function HomePage({ funct }) {
  return (
    <div className='back'>
      <div className='home_pg'>
        <h1 className='title'>Find My Dish</h1>
        <SearchBar onSearch={funct} />
      </div>
    </div>
  );
}
