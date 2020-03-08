import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Loader from "./../components/Loader/index";
const Adminlayout = props => {
  return (
    <Fragment>
      <div className="wrapper">
        <Loader />
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
        return (
          <Adminlayout>
            <Component {...propsComponent} />
          </Adminlayout>
        );

        // chuyen ve trang admin
        return <Redirect to="/admin" />;
      }}
    />
  );
}
