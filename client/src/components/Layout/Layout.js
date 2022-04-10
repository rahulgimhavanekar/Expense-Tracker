import React, { Fragment } from "react";
import Header from "./Header";
import classes from "./Layout.module.css";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <Sidebar />
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
