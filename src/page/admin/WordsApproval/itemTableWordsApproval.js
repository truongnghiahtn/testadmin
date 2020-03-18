import React, { Component } from "react";
import * as action from "../../../redux/action/index";
import { connect } from "react-redux";
import swal from "sweetalert";

class itemTable extends Component {
  convertHTML = html => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  duyetitem = id => {
    if (id) {
      this.props.approved({ id: id, status: 1 });
    }
  };

  xoaitem = id => {
    swal({
      title: "Bạn có chắc không?",
      text: "Sau khi xóa, bạn sẽ không thể khôi phục !",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.props.deleteWord(id);
      } else {
        swal("Thông tin của bạn an toàn!");
      }
    });
  };
  render() {
    let { word, stt } = this.props;
    return (
      <tr>
        <td className="index">{stt}</td>
        <td className="content_word">{word.word_name}</td>
        <td className="content_word">{word.Vietnamese_meaning}</td>
        <td className="chuc-nang">
          <span className="table-remove">
            <button
              type="button"
              className="btn btn-success mb-3"
              onClick={() => {
                this.duyetitem(word._id);
              }}
            >
              <i class="ri-check-fill pr-0"></i>
              Duyệt
            </button>

            <button
              type="button"
              className="btn btn-danger mb-3"
              onClick={() => {
                this.xoaitem(word._id);
              }}
              style={{ width: "84px" }}
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
    deleteWord: id => dispatch(action.actDelWordAPI(id)),
    approved: data => dispatch(action.actAppovedWordAPI(data))
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
