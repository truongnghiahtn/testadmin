import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";

import swal from "sweetalert";

class childModalAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: "",
        username: "",
        password: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      },
      errors: {
        username: "",
        password: ""
      },
      formValid: false,
      usernameValid: false,
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
    let message = value === "" ? "Mời bạn nhập dữ liệu" : "";
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
    if (this.props.editInfoAdmin === null) {
      this.props.addAdmin(this.state.values);
      this.setState({
        values: {
          ...this.state.values,
          username: "",
          password: ""
        },
        usernameValid: false,
        passwordValid: false
      });
    } else {
      this.props.editAdmin(this.state.values);
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editInfoAdmin) {
      //Update
      this.setState({
        values: {
          ...this.state.values,
          username: nextProps.editInfoAdmin.username,
          password: "",
          id: nextProps.editInfoAdmin._id,
          createdAt: nextProps.editInfoAdmin.createdAt,
          updatedAt: nextProps.editInfoAdmin.updatedAt
        },
        errors: {
          ...this.state.errors,
          username: "",
          password: ""
        },
        usernameValid: true,
        passwordValid: true
      });
    } else {
      //ADD
      this.setState({
        values: {
          ...this.state.values,
          username: "",
          password: ""
        },
        usernameValid: false,
        passwordValid: false
      });
    }
  }

  render() {
    return (
      <>
        <div>
          <div className="modal-header">
            {this.props.editInfoAdmin === null ? (
              <h5 className="modal-title">Thêm admin</h5>
            ) : (
              <h5 className="modal-title">Sửa admin</h5>
            )}
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body edit-modal">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label style={{ width: "100%" }}>
                  Username
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={this.handleOnchange}
                    onBlur={this.handleErrors}
                    onKeyUp={this.handleErrors}
                    name="username"
                    disabled={this.props.editInfoAdmin ? true : false}
                    value={
                      this.state.values.username
                        ? this.state.values.username
                        : ""
                    }
                  />
                </label>
                {this.state.errors.username !== "" ? (
                  <div className="Form_err errform">
                    (*) {this.state.errors.username}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label style={{ width: "100%" }}>
                      Password
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.handleOnchange}
                        onBlur={this.handleErrors}
                        onKeyUp={this.handleErrors}
                        name="password"
                        value={
                          this.state.values.password
                            ? this.state.values.password
                            : ""
                        }
                      />
                    </label>
                    {this.state.errors.password !== "" ? (
                      <div className="Form_err errform">
                        (*) {this.state.errors.password}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end">
                  <button
                    type="reset"
                    className="btn iq-bg-danger"
                    style={{ marginRight: 10 }}
                    data-dismiss="modal"
                  >
                    Thoát
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!this.state.formValid}
                  >
                    Gửi
                  </button>
                </ul>
              </nav>
            </form>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    editInfoAdmin: state.deMoReducer.editAdmin
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editAdmin: data => {
      dispatch(action.actEditAdminAPI(data));
    },
    addAdmin: data => {
      dispatch(action.addAdminApiDevfast(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(childModalAdmin);
