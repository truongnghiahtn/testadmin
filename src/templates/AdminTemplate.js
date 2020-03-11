import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Sidebar from "./../components/sidebarAdmin/sidebarAdmin";
import HeaderAdmin from "../components/headerAdmin/headerAdmin";
import Loader from "./../components/Loader/index";
import FooterAdmin from "./../components/FooterAdmin/index";
const Adminlayout = props => {
  return (
    <Fragment>
      <Loader />
      <div className="wrapper">
        <Sidebar />
        <div id="content-page" className="content-page">
          <HeaderAdmin />
          {props.children}
          <FooterAdmin />
        </div>
      </div>
    </Fragment>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (sessionStorage.getItem("userAdmin")) {
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
