import React from "react";
import { NavLink } from "react-router-dom";
import dashboardIcon from "../../assets/dashboard_icon.svg";
import expensesIcon from "../../assets/expenses_icon.svg";
import incomeIcon from "../../assets/income_icon.svg";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/dashboard"
          >
            <img src={dashboardIcon} alt="dashboard" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to="/expenses"
          >
            <img src={expensesIcon} alt="expenses" />
            Expenses
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
            to={"/income"}
          >
            <img src={incomeIcon} alt="income" />
            Income
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
