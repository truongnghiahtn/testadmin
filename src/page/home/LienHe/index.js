import React, { Component, Fragment } from "react";
import PageTitleArea from "../../../components/PageTitleArea";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";
import { connect } from "react-redux";
import * as action from "../../../redux/action";

class LienHe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        fullname: "",
        phone: "",
        message: ""
      },
      errs: {
        email: "",
        fullname: "",
        phone: "",
        message: ""
      },
      valids: {
        email: false,
        fullname: false,
        phone: false,
        message: false,
        form: false
      }
    };
  }
  handleOnChange = e => {
    let { name, value } = e.target;
    this.setState(
      {
        values: { ...this.state.values, [name]: value }
      },
      () => {
        console.log(this.state);
        this.handleOnErr(name, value);
      }
    );
  };
  handleOnErr = (name, value) => {
    let { errs, valids } = this.state;
    let isValid = false;
    let message = value === "" ? "Vui lòng nhập câu trả lời của bạn" : "";
    isValid = message !== "" ? false : true;
    if (value !== "") {
      switch (name) {
        case "email":
          if (
            !value.match(
              "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
                "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
            )
          ) {
            isValid = false;
            message = "không đúng định dạng.";
          }
          break;
        case "fullname":
          if (
            !value.match(
              "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
            )
          ) {
            isValid = false;
            message = "không đúng định dạng.";
          }
          break;
        case "phone":
          if (!value.match("^[0-9]*$")) {
            isValid = false;
            message = "không đúng định dạng.";
          }
          break;
        default:
          break;
      }
    }
    this.setState(
      {
        errs: { ...errs, [name]: message },
        valids: { ...valids, [name]: isValid }
      },
      () => {
        this.formValidation();
      }
    );
  };
  formValidation = () => {
    let { valids } = this.state;
    this.setState({
      valids: {
        ...valids,
        form: valids.email && valids.fullname && valids.phone && valids.message
      }
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.valids.form) {
      this.props.postContactApi(this.state.values);
    } else {
      setTimeout(() => {
        swal({
          title: "Error",
          text: `Vui lòng kiểm tra lại thông tin!`,
          icon: "error",
          buttons: false,
          timer: 1500
        });
      }, 150);
    }
  };
  render() {
    let { values, errs } = this.state;
    return (
      <Fragment>
        <PageTitleArea title="Liên hệ" />
        <div className="lienhe-area">
          <div className="container">
            <form className="lh-form" onSubmit={this.handleOnSubmit}>
              <div className="lh-main-content">
                <div className="lienhe-intro lh-contain">
                  <h1>Liên hệ với chúng tôi</h1>
                  <p>
                    Xin hãy hỗ trợ cho chúng tôi theo mẫu dưới đây. Nếu bạn có
                    nhiều mẫu câu hơn xin hãy vui lòng gửi dưới dạng file (.txt,
                    .doc, .xls) cho chúng tôi theo địa chỉ{" "}
                    <a href="#">feedback@tracau.vn.</a> Chúng tôi sẽ xem và nhập
                    vào hệ thống Tra câu sớm nhất có thể. Xin trân trọng cảm ơn
                    sự đóng góp quý báu của bạn.{" "}
                  </p>
                  <span>*Bắt buộc</span>
                </div>
                <div
                  className={
                    "lh-input-group lh-contain " +
                    (errs.fullname !== "" ? "lh-err-contain" : "")
                  }
                >
                  <label htmlFor="lh-vi">
                    Họ Tên<span> *</span>
                  </label>
                  <div className="lh-textbox">
                    <input
                      id="lh-vi"
                      type="text"
                      placeholder="Câu trả lời của bạn"
                      name="fullname"
                      autoComplete="off"
                      value={values.fullname}
                      onChange={this.handleOnChange}
                      onBlur={this.handleOnChange}
                    />
                  </div>
                  {errs.fullname !== "" ? (
                    <p className="lh-err">
                      <i className="fa fa-exclamation-circle"></i>{" "}
                      {errs.fullname}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className={
                    "lh-input-group lh-contain " +
                    (errs.email !== "" ? "lh-err-contain" : "")
                  }
                >
                  <label htmlFor="lh-vi">
                    email<span> *</span>
                  </label>
                  <div className="lh-textbox">
                    <input
                      id="lh-vi"
                      type="text"
                      placeholder="Câu trả lời của bạn"
                      name="email"
                      autoComplete="off"
                      value={values.email}
                      onChange={this.handleOnChange}
                      onBlur={this.handleOnChange}
                    />
                  </div>
                  {errs.email !== "" ? (
                    <p className="lh-err">
                      <i className="fa fa-exclamation-circle"></i> {errs.email}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className={
                    "lh-input-group lh-contain " +
                    (errs.phone !== "" ? "lh-err-contain" : "")
                  }
                >
                  <label htmlFor="lh-vi">
                    Số điện thoại<span> *</span>
                  </label>
                  <div className="lh-textbox">
                    <input
                      id="lh-vi"
                      type="text"
                      placeholder="Câu trả lời của bạn"
                      name="phone"
                      autoComplete="off"
                      value={values.phone}
                      onChange={this.handleOnChange}
                      onBlur={this.handleOnChange}
                    />
                  </div>
                  {errs.phone !== "" ? (
                    <p className="lh-err">
                      <i className="fa fa-exclamation-circle"></i> {errs.phone}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className={
                    "lh-input-group lh-contain " +
                    (errs.message !== "" ? "lh-err-contain" : "")
                  }
                >
                  <label htmlFor="lh-vi">
                    Tin nhắn<span> *</span>
                  </label>
                  <div className="lh-textbox lh-textbox-message">
                    <textarea
                      id="lh-vi"
                      type="text"
                      placeholder="Câu trả lời của bạn"
                      name="message"
                      autoComplete="off"
                      value={values.message}
                      onChange={this.handleOnChange}
                      onBlur={this.handleOnChange}
                    />
                  </div>
                  {errs.message !== "" ? (
                    <p className="lh-err">
                      <i className="fa fa-exclamation-circle"></i>{" "}
                      {errs.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <Button type="submit" className="lh-btn">
                Gửi
              </Button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postContactApi: data => {
      dispatch(action.postContactApi(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(LienHe);
