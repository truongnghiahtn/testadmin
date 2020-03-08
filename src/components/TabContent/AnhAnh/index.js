import React, { Component } from "react";

class AnhAnh extends Component {
  renderDataHTML = () => {
    return <div dangerouslySetInnerHTML={{ __html: this.props.content }}></div>;
  };
  render() {
    return <div>{this.renderDataHTML()}</div>;
  }
}

export default AnhAnh;
