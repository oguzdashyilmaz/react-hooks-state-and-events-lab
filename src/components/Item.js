import React from "react";
import {useState} from "react";

function Item({ name, category }) {
  
  const [toCart, setToCart] = useState(false);

  function handleClick() {
    setToCart(toCart => !toCart)
  };



  return (
    <li className={toCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
