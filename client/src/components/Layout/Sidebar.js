import React from "react";
import dashboardIcon from "../../assets/dashboard_icon.svg";
import expensesIcon from "../../assets/expenses_icon.svg";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <ul className={classes.item_list}>
        <li>
          <div className={classes.item}>
            <img src={dashboardIcon} alt="dashboard" />
            Dashboard
          </div>
        </li>
        <li>
          <div className={classes.item}>
            <img src={expensesIcon} alt="expenses" />
            Expenses
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
