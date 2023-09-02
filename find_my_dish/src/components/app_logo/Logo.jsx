import { Link } from "react-router-dom";
import React from "react";
import "./logo.css";

export default function Header() {
  return (
    <Link style={{ display: "inline-block" }} to={"/"}>
      <div className='logo'>
        <img className='logo-img' src='/assets/logo.png' />
      </div>
    </Link>
  );
}
