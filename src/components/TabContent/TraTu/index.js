import React, { Component, Fragment } from "react";
import * as $ from "jquery";

class TraTu extends Component {
  componentDidMount() {
    console.log(this.props);
    // var a = document.createElementNS(
    //   '<a  className="v"><i className="fa fa-bullhorn"></i></a>'
    // );
    // $("#" + this.props.id + " .dict--title")[0].append(a);
  }

  renderDataHTML = () => {
    return (
      <div
        className="tcTab--slidesContainer"
        dangerouslySetInnerHTML={{ __html: this.props.content }}
      ></div>
    );
  };
  render() {
    return <Fragment>{this.renderDataHTML()}</Fragment>;
  }
}

export default TraTu;
