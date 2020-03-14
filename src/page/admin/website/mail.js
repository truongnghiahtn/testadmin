import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
class Mail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        _id: "",
        sender: "",
        receivers: "",
        password: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      },
      errors: {
        sender: "",
        receivers: "",
        password: ""
      },
      formValid: false,
      senderValid: false,
      receiversValid: false,
      passwordValid: false
    };
  }

  handleOnchange = event => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    });
  };

  handleErrors = event => {
    let { name, value } = event.target;
    let message = value === "" ? "Do not be empty" : "";
    let { senderValid, receiversValid, passwordValid } = this.state;
    switch (name) {
      case "password":
        passwordValid = message !== "" ? false : true;
        break;

      case "sender":
        if (
          !value.match(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
              "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          )
        ) {
          senderValid = false;
          message = "Không đúng định dạng.";
        }
        break;
      case "receivers":
        if (
          !value.match(
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
              "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
          )
        ) {
          receiversValid = false;
          message = "Không đúng định dạng.";
        }
        break;
      default:
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        senderValid,
        receiversValid,
        passwordValid
      },
      () => {
        this.FormValidation();
      },
      console.log(this.state)
    );
  };

  FormValidation = () => {
    this.setState({
      formValid:
        this.state.senderValid &&
        this.state.receiversValid &&
        this.state.passwordValid
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.editMail(this.state.values);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.dataMail) {
      this.setState({
        values: {
          ...this.state.values,
          _id: nextProps.dataMail._id,
          sender: nextProps.dataMail.sender,
          receivers: nextProps.dataMail.receivers,
          password: nextProps.dataMail.password,
          createdAt: nextProps.dataMail.createdAt,
          updatedAt: nextProps.dataMail.updatedAt
        },
        errors: {
          ...this.state.errors,
          sender: "",
          receivers: "",
          password: ""
        },
        formValid: true,
        senderValid: true,
        receiversValid: true,
        passwordValid: true
      });
    }
  }

  render() {
    return (
      <div
        className="tab-pane fade"
        id={`pills-mail-fill`}
        role="tabpanel"
        aria-labelledby={`pills-mail-tab-fill`}
      >
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <label>Mail server</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Tài khoản"
                  name="sender"
                  value={this.state.values.sender}
                  onChange={this.handleOnchange}
                  onKeyUp={this.handleErrors}
                />
                {this.state.errors.sender !== "" ? (
                  <div className="Form_err errform mt-0">
                    (*) {this.state.errors.sender}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <label>Mật khẩu mail server</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mật khẩu"
                  name="password"
                  value={this.state.values.password}
                  onChange={this.handleOnchange}
                  onKeyUp={this.handleErrors}
                />
                {this.state.errors.password !== "" ? (
                  <div className="Form_err errform mt-0">
                    (*) {this.state.errors.password}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <label>Mail nhận</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Tài khoản"
                  name="receivers"
                  value={this.state.values.receivers}
                  onChange={this.handleOnchange}
                  onKeyUp={this.handleErrors}
                />
                {this.state.errors.receivers !== "" ? (
                  <div className="Form_err errform mt-0">
                    (*) {this.state.errors.receivers}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <button type="submit" className="btn btn-primary">
                Sửa
              </button>
            </ul>
          </nav>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editMail: data => {
      dispatch(action.actEditMailAPI(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(Mail);
