import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
class TraTu extends Component {
  renderDataTraTu = () => {
    return this.props.traCau.tratu
      ? this.props.traCau.tratu.map((item, index) => {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: item.fields.fulltext }}
            ></div>
          );
        })
      : "";
  };

  render() {
    return (
      <Fragment>
        <div className="tc-page__container">
          {this.props.traCau ? this.renderDataTraTu() : ""}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    traCau: state.deMoReducer.traCau
  };
};
export default connect(mapStateToProps, null)(TraTu);
