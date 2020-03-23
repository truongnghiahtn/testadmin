import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import $ from "jquery";
class modalExcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      excel: "",
      error: false,
      message: ""
    };
  }
  handleOnchange = e => {
    this.setState({
      excel: e.target.files[0]
    });
  };

  handleOnError = e => {
    if (e.target.value) {
      this.setState({
        ...this.state,
        error: true,
        message: ""
      });
    } else {
      this.setState({
        excel: "",
        error: false,
        message: "(*) Do not be empty!"
      });
    }
  };

  handleOnSubmit = e => {
    this.props.addExcel(this.state.excel);
    this.setState({
      excel: "",
      error: false,
      message: ""
    });
    $("#inputGroupFile01").val("");
    $("#custom-excel").text("Choose file excel");
  };

  render() {
    return (
      <div>
        <div
          class="modal fade"
          id="modalExcel"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Thêm file excel</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    onChange={this.handleOnchange}
                    onInput={this.handleOnError}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                    id="custom-excel"
                  >
                    Choose file excel
                  </label>
                </div>
                {!this.state.error ? (
                  <div className="Form_err errform mt-0">
                    {this.state.message}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="modal-footer justify-content-between">
                <button type="button" className="btn btn-sm iq-bg-success">
                  <a
                    href="https://drive.google.com/u/0/uc?id=1fEcV5qUT2RBBEuDcpieAztoXCe9tJ9v0&export=download"
                    download
                    style={{ color: "#00CA04" }}
                  >
                    Excel mẫu
                  </a>
                </button>
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary mr-2"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={!this.state.error}
                    onClick={() => this.handleOnSubmit()}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addExcel: file => {
      dispatch(action.addExcelApiDevfast(file));
    }
  };
};

export default connect(null, mapDispatchToProps)(modalExcel);
