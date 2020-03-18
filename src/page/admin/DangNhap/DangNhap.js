import React, { Component } from 'react'
import * as action from "./../../../redux/action/index";
import { connect } from "react-redux";

 class DangNhap extends Component {

constructor(props) {
    super(props);
    this.state = {
      values: { username: "", password: "" },
      errors: { username: "", password: "", username_1: "" },
      formValid: false,
      usernameValid: false,
      passwordValid: false
    };
  }
  handleOnchanle = event => {
    this.setState(
      {
        values: {
          ...this.state.values,
          [event.target.name]: event.target.value
        }
      },
      () => {}
    );
  };
  handleErrors = event => {
    let { name, value } = event.target;

    let message = value === "" ? " Do not be empty" : "";
    let { usernameValid, passwordValid } = this.state;
    switch (name) {
      case "username":
        usernameValid = message !== "" ? false : true;
        break;

      case "password":
        passwordValid = message !== "" ? false : true;
        break;
      default:
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        usernameValid,
        passwordValid
      },
      () => {
        this.FormValidation();
      }
    );
  };
  FormValidation = () => {
    this.setState({
      formValid: this.state.usernameValid && this.state.passwordValid
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.values, this.props.history);
  };
  renderlogin = () => {
    return (
      <div className="nghiadzn">
        <div className="Form">
          <div className="Form_Overlay" />
          <div className="wrapper">
            <div className="container1">
              {/* <h1>Welcome</h1> */}
              <form
                className="form"
                autoComplete="off"
                onSubmit={this.handleSubmit}
              >
                <input
                  type="text"
                  name="username"
                  onChange={this.handleOnchanle}
                  onBlur={this.handleErrors}
                  onKeyUp={this.handleErrors}
                  placeholder="Tài khoản"
                />
                {this.state.errors.username !== "" ? (
                  <div className="Form_err">
                    (*) {this.state.errors.username}
                  </div>
                ) : (
                  ""
                )}
                <input
                  type="password"
                  name="password"
                  onChange={this.handleOnchanle}
                  onBlur={this.handleErrors}
                  onKeyUp={this.handleErrors}
                  placeholder="Mật khẩu"
                />
                {this.state.errors.password !== "" &&
                this.props.adminLogin === "" ? (
                  <div className="Form_err">
                    (*) Tài khoản hoặc mật khẩu không đúng!
                  </div>
                ) : (
                  ""
                )}
                {this.props.adminLogin !== "" ? (
                  <div className="Form_err">
                     (*) Tài khoản hoặc mật khẩu không đúng!
                  </div>
                ) : (
                  ""
                )}
                <button
                  className=" btn-5"
                  type="submit"
                  disabled={!this.state.formValid}
                >
                  Đăng nhập
                </button>
              </form>
              <div className="logout-home">
                <a href="/">Về Trang chủ</a>
              </div>
            </div>
            <ul className="bg-bubbles">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <ul className="bg-bubbles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    );
  };
  render() {
    return <div>{this.renderlogin()}</div>;
  }
}
const mapStateToProps = state => {
    return {
      adminLogin: state.deMoReducer.ADMIN_LOGIN
    };
  };
const mapDispatchToProps = dispatch => {
    return {
      onSubmit: (user, history) => {
        dispatch(action.actloginAdmin(user, history));
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(DangNhap );