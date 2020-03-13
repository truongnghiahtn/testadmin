import React, { Component, Fragment } from "react";
import * as $ from "jquery";

class TraTu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    let { content } = this.props;
    if (content !== nextProps.content) {
      this.setState({ content });
      console.log(this.props.id);
    }
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
