import React from "react";
import "./Card.css"

const Card = ({ item }) => {
  console.log(item);
  const {id,title,desc, image, price} = item
  return (
    <div className="cardContainer">
    <img className='cardImg' src={image}  alt="" />
    <h3> {title} </h3>
    <p className="par"> {desc} </p>
    <button className="button">BUY TICKET</button>
    <span> {price} </span>


  </div>
  )
  
};

export default Card;
