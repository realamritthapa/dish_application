import React, { useEffect, useState } from "react";
import DishInfo from "../ingredient_box/DishInfo";
import "./dishdisplay.css";

const DishDisplay = React.memo((props) => {
  const [data, setData] = useState([]);
  const [recipe, setRecipe] = useState(data.recipe);

  useEffect(() => {
    if (props.data) {
      async function fetchData() {
        try {
          const response = await fetch(
            `https://dish-server.onrender.com/recipe?data=${props.data}`
          );
          const hits = await response.json();
          setData(hits);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }
  }, [props.data]);

  useEffect(() => {
    if (data.length > 0) {
      setRecipe(data[0].recipe); // Set the first item in the data array as the recipe
    }
  }, [data]);

  function handleClick(data) {
    setRecipe(data);
  }

  return (
    <div className='container'>
      <div className='scroll-image'>
        {data.map((item) => (
          <img
            key={item.recipe.uri}
            className='food-image'
            width={"100px"}
            src={item.recipe.image}
            onClick={() => {
              handleClick(item.recipe);
            }}
            loading='lazy'
          />
        ))}
      </div>
      <div className='image-info'>{recipe && <DishInfo info={recipe} />}</div>
    </div>
  );
});

export default DishDisplay;
