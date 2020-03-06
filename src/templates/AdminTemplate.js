import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Sidebar from "./../components/sidebarAdmin/sidebarAdmin";
import Loader from "./../components/Loader/index";
const Adminlayout = props => {
  return (
    <Fragment>
      <div className="wrapper">
        <Loader />
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
