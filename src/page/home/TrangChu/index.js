import React, { Component } from "react";
import "./style.scss";
import Navtab from "../../../components/Navtab";
import Search from "../../../components/Form/Search";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <Navtab />
      </React.Fragment>
    );
  }
}

export default Home;
