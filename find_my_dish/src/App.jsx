import React, { useState } from "react";
import HomePage from "./components/home_page/HomePage";
import Display from "./components/display_page/Display";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [searchValue, setValue] = useState("");

  function handleSearch(value) {
    setValue(value);
    console.log(value);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage funct={handleSearch} />}></Route>
        <Route path='/dishes' element={<Display data={searchValue} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
