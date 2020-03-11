import React, { Component } from "react";
import * as action from "../../../redux/action/index";
import { connect } from "react-redux";

class itemTable extends Component {
  convertHTML = html => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };
  render() {
    let { word, stt } = this.props;
    return (
      <tr>
        <td className="index">{stt}</td>
        <td >{this.convertHTML(word.word_name)}</td>
        <td >
          {this.convertHTML(word.Vietnamese_meaning)}
        </td>
        <td className="content_en">
          <span className="table-remove">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modelId"
              className="btn btn-warning mb-3"
              onClick={() => this.props.editWord(word)}
            >
              <i className="fa fa-wrench" aria-hidden="true" />
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-danger mb-3"
              onClick={() => this.props.deleteWord(word._id)}
            >
              <i className="ri-delete-bin-2-fill pr-0" />
              Xóa
            </button>
          </span>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editWord: data => {
      dispatch(action.actGetEditWord(data));
    },
    deleteWord: id => dispatch(action.actDelWordAPI(id))
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
