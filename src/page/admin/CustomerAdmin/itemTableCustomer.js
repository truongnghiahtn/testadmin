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
        this.props.deleteCustomer(id);
      } else {
        swal("Thông tin của bạn an toàn!");
      }
    });
  };
  render() {
    let { customer, stt } = this.props;
    return (
      <tr>
        <td className="index">{stt}</td>
        <td className="content_en">{customer.fullname}</td>
        <td className="email-customer">{customer.email}</td>
        <td className="content_en">{customer.phone}</td>
        <td>{customer.message}</td>
        <td className="chuc-nang">
          <span className="table-remove">
            <button
              type="button"
              className="btn btn-danger mb-3"
              onClick={() => {
                this.xoaitem(customer._id);
              }}
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
    deleteCustomer: id => dispatch(action.actDelCustomerAPI(id))
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
