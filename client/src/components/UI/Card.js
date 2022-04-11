import React from "react";
import { symbol } from "../../utils";
import classes from "./Card.module.css";

const Card = ({ title, total, icon }) => {
  return (
    <div className={classes.card}>
      <p>{title}</p>
      <h5>
        {symbol} {total}
      </h5>
      <div className={classes.icon}>{/* <img src={icon} alt="icon" /> */}</div>
    </div>
  );
};

export default Card;
