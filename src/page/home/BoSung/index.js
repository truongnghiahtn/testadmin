import React, { Component, Fragment } from "react";
import PageTitleArea from "../../../components/PageTitleArea";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";

export default class BoSung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        wordEng: "",
        wordViet: ""
      },
      errs: {
        wordEng: "",
        wordViet: ""
      },
      valids: {
        wordEng: false,
        wordViet: false,
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
        this.handleOnErr(name, value);
      }
    );
  };
  handleOnErr = (name, value) => {
    let { errs, valids } = this.state;
    let isValid = false;
    let massage = value === "" ? "Vui lòng nhập câu trả lời của bạn" : "";
    isValid = massage !== "" ? false : true;
    if (value !== "") {
      switch (name) {
        case "wordEng":
          if (!value.match("^[a-zA-Z\\s]+$")) {
            isValid = false;
            massage = "không đúng định dạng.";
          }
          break;
        case "wordViet":
          if (
            !value.match(
              "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
            )
          ) {
            isValid = false;
            massage = "không đúng định dạng.";
          }
          break;
        default:
          break;
      }
    }
    this.setState(
      {
        errs: { ...errs, [name]: massage },
        valids: { ...valids, [name]: isValid }
      },
      () => {
        this.formValidation();
      }
    );
  };
  formValidation = () => {
    let { valids } = this.state;
    this.setState(
      {
        valids: {
          ...valids,
          form: valids.wordViet && valids.wordEng
        }
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.state.valids.form) {
      setTimeout(() => {
        swal({
          title: "Success",
          text: `OK...!`,
          icon: "success",
          buttons: false,
          timer: 1500
        });
      }, 150);
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
        <PageTitleArea title="Bổ sung câu mới" />
        <div className="bosung-area">
          <div className="container">
            <div className="bosung-intro bs-contain">
              <h1>Đóng góp mẫu câu mới</h1>
              <p>
                Xin hãy hỗ trợ cho chúng tôi theo mẫu dưới đây. Nếu bạn có nhiều
                mẫu câu hơn xin hãy vui lòng gửi dưới dạng file (.txt, .doc,
                .xls) cho chúng tôi theo địa chỉ{" "}
                <a href="#">feedback@tracau.vn.</a> Chúng tôi sẽ xem và nhập vào
                hệ thống Tra câu sớm nhất có thể. Xin trân trọng cảm ơn sự đóng
                góp quý báu của bạn.{" "}
              </p>
              <span>*Bắt buộc</span>
            </div>
            <form className="bs-form" onSubmit={this.handleOnSubmit}>
              <div
                className={
                  "bs-input-group bs-contain " +
                  (errs.wordEng !== "" ? "bs-err-contain" : "")
                }
              >
                <label htmlFor="bs-en">
                  Câu Tiếng Anh<span> *</span>
                </label>
                <div className="bs-textbox">
                  <input
                    id="bs-en"
                    type="text"
                    placeholder="Câu trả lời của bạn"
                    name="wordEng"
                    autoComplete="off"
                    value={values.wordEng}
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnChange}
                  />
                </div>
                {errs.wordEng !== "" ? (
                  <p className="bs-err">
                    <i className="fa fa-exclamation-circle"></i> {errs.wordEng}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div
                className={
                  "bs-input-group bs-contain " +
                  (errs.wordViet !== "" ? "bs-err-contain" : "")
                }
              >
                <label htmlFor="bs-vi">
                  Câu Tiếng Việt<span> *</span>
                </label>
                <div className="bs-textbox">
                  <input
                    id="bs-vi"
                    type="text"
                    placeholder="Câu trả lời của bạn"
                    name="wordViet"
                    autoComplete="off"
                    value={values.wordViet}
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnChange}
                  />
                </div>
                {errs.wordViet !== "" ? (
                  <p className="bs-err">
                    <i className="fa fa-exclamation-circle"></i> {errs.wordViet}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <Button type="submit" className="bs-btn">
                Gửi
              </Button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
