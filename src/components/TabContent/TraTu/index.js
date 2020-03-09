import React, { Component, Fragment } from "react";

class TraTu extends Component {
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
