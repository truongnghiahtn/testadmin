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
  xoaitem = id => {
    swal({
      title: "Bạn có chắc không?",
      text: "Sau khi xóa, bạn sẽ không thể khôi phục !",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.props.deleteAdmin(id);
      } else {
        swal("Thông tin của bạn an toàn!");
      }
    });
  };
  render() {
    let { admin, stt } = this.props;
    return (
      <tr>
        <td>{stt}</td>
        <td>{admin.username}</td>
        <td>{admin.role}</td>

        <td className="content_en">
          <span className="table-remove">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modelId"
              className="btn btn-warning mb-3"
              onClick={() => this.props.editAdmin(admin)}
            >
              <i className="fa fa-wrench" aria-hidden="true" />
              Sửa
            </button>
            <button
              type="button"
              className="btn btn-danger mb-3"
              onClick={() => {
                this.xoaitem(admin._id);
              }}
              disabled={admin.role==="supper"?(true):(false)}
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
    editAdmin: data => {
      dispatch(action.actGetEditAdmin(data));
    },
    deleteAdmin: id => dispatch(action.actDelAdminAPI(id))
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
