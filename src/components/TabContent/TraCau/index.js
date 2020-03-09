import React, { Component } from "react";
import { connect } from "react-redux";
class TraCau extends Component {
  renderDataTraCau = () => {
    return this.props.traCau.length
      ? this.props.traCau.map((item, index) => {
          return (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: item.fields.shorttext }}
            ></li>
          );
        })
      : "";
  };
  render() {
    return (
      <div className="tc-page__container">
        <ul className="tc-row-list">
          {this.props.traCau ? this.renderDataTraCau() : ""}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    traCau: state.deMoReducer.traCau
  };
};
export default connect(mapStateToProps, null)(TraCau);
