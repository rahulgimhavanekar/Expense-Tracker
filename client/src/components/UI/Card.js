import React from "react";
import { symbol } from "../../utils/constants";
import classes from "./Card.module.css";

const Card = ({ title, total, icon }) => {
  return (
    <div className={classes.card}>
      <div className={classes.icon}>
        <img src={icon} alt="icon" />
      </div>
      <div className={classes.info}>
        <p>{title}</p>
        <h5>
          {symbol} {total}
        </h5>
      </div>
    </div>
  );
};

export default Card;
