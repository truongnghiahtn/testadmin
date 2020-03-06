import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Sidebar from "./../components/sidebarAdmin/sidebarAdmin";

const Adminlayout = props => {
  return (
    <Fragment>
      {/* <div id="loading">
        <div id="loading-center"></div>
      </div> */}
      <div className="wrapper">
        >
        <Sidebar />
        {props.children}
      </div>
    </Fragment>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("userAdmin")) {
          return (
            <Adminlayout>
              <Component {...propsComponent} />
            </Adminlayout>
          );
        }
        // chuyen ve trang admin
        return <Redirect to="/admin" />;
      }}
    />
  );
}
