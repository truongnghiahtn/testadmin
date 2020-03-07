import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
class TrangDichVu extends Component {
  componentDidMount() {
    this.props.getDataSearchApi("house");
  }
  renderDataSearch = () => {
    return this.props.dataSearch.map((item, index) => {
      return (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: item.fields.shorttext }}
        ></div>
      );
    });
  };
  render() {
    return (
      <div>{this.props.dataSearch.length ? this.renderDataSearch() : ""}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataSearch: state.deMoReducer.dataSearch
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDataSearchApi: data => {
      dispatch(action.getDataSearchApi(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrangDichVu);
