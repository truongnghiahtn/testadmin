import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";

const HomeLayout = props => {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

const HomeTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={propsComponent => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
};

export default HomeTemplate;
