import React from "react";
import Card from "../card/Card";
import data from "../../data";
import "./Main.css"

const Main = () => {
//   console.log(data);
  return (
    <div className="cardItem">
      {data.map((item) => 
        (<Card item={item} />)

        // const {id, title, desc, image} = item
      )}
    </div>
  );
};

export default Main;
