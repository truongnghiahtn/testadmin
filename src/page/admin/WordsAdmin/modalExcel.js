import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
class modalExcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      excel: "",
      error: true,
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
        message: "Do not be empty!"
      });
    }
  };

  handleOnSubmit = e => {
    this.props.addExcel(this.state.excel);
  };

  render() {
    return (
      <div>
        <div
          class="modal fade"
          id="modalExcel"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modelTitleId"
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
                    onKeyUp={this.handleOnError}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Choose file excel
                  </label>
                </div>
                {!this.state.error ? (
                  <div className="Form_err errform">
                    (*) {this.state.message}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
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
