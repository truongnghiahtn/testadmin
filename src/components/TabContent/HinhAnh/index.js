import React, { Component } from "react";
import { connect } from "react-redux";
class HinhAnh extends Component {
  render() {
    return (
      <div>
        <iframe
          src={`https://www.bing.com/images/search?q=${this.props.word}`}
          scrolling="yes"
          id="bing_iframe"
          width="100%"
          height="900"
          frameBorder="0"
          noresize="noresize"
        ></iframe>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    word: state.deMoReducer.word
  };
};

export default connect(mapStateToProps, null)(HinhAnh);
