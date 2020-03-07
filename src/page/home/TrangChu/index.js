import React from "react";
import "./style.scss";
import Navbar from "../../../components/Navbar";
import Navtab from "../../../components/Navtab";
import Search from "../../../components/Form/Search";

const Home = () => {
  return (
    <React.Fragment>
      <Search />
      <Navtab />
    </React.Fragment>
  );
};

export default Home;
