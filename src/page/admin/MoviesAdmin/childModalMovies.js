import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale

class childModalMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: "",
        image: "",
        title: "",
        content: "",
        english_meaning: "",
        Vietnamese_meaning: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      },
      errors: {
        image: "",
        title: "",
        content: "",
        english_meaning: "",
        Vietnamese_meaning: ""
      },
      formValid: false,
      imageValid: false,
      titleValid: false,
      contentValid: false,
      english_meaningValid: false,
      Vietnamese_meaningValid: false
    };
  }
  handleOnchange = event => {
    this.setState(
      {
        values: {
          ...this.state.values,
          [event.target.name]: event.target.value
        }
      },
      () => {
        console.log(this.state);
      }
    );
  };
  onChange = content => {
    this.setState(
      {
        values: { ...this.state.values, content }
      },
      console.log(this.state)
    );
  };
  onErrorContent = err => {
    let message = err.target.innerHTML === "" ? "Do not be empty" : "";
    let { contentValid } = this.state;
    contentValid = message !== "" ? false : true;

    this.setState(
      {
        errors: { ...this.state.errors, content: message },
        contentValid
      },
      () => {
        this.FormValidation();
      }
    );
  };

  handleErrors = event => {
    let { name, value } = event.target;
    let message = value === "" ? "Do not be empty" : "";
    let {
      imageValid,
      titleValid,
      english_meaningValid,
      Vietnamese_meaningValid
    } = this.state;
    switch (name) {
      case "image":
        imageValid = message !== "" ? false : true;
        break;
      case "title":
        titleValid = message !== "" ? false : true;
        break;
      /*       case "content":
        contentValid = message !== "" ? false : true;
        break; */
      case "english_meaning":
        english_meaningValid = message !== "" ? false : true;
        break;
      case "Vietnamese_meaning":
        Vietnamese_meaningValid = message !== "" ? false : true;
        break;
      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        imageValid,
        titleValid,
        english_meaningValid,
        Vietnamese_meaningValid
        /* contentValid */
      },
      () => {
        this.FormValidation();
      }
    );
  };
  FormValidation = () => {
    this.setState({
      formValid:
        this.state.imageValid &&
        this.state.titleValid &&
        this.state.contentValid &&
        this.state.english_meaningValid &&
        this.state.Vietnamese_meaningValid
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.props.editInfoMovie === null) {
      this.props.addMovie(this.state.values);
      console.log(this.state.values);
    } else {
      this.props.editMovie(this.state.values);
      console.log(this.state.values);
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editInfoMovie) {
      //Update
      console.log(nextProps.editInfoMovie);

      this.setState({
        values: {
          ...this.state.values,
          image: nextProps.editInfoMovie.image,
          title: nextProps.editInfoMovie.title,
          content: nextProps.editInfoMovie.content,
          english_meaning: nextProps.editInfoMovie.english_meaning,
          Vietnamese_meaning: nextProps.editInfoMovie.Vietnamese_meaning,
          id: nextProps.editInfoMovie._id,
          createdAt: nextProps.editInfoMovie.createdAt,
          updatedAt: nextProps.editInfoMovie.updatedAt
        },
        errors: {
          ...this.state.errors,
          image: "",
          title: "",
          content: "",
          english_meaning: "",
          Vietnamese_meaning: ""
        },

        imageValid: true,
        titleValid: true,
        contentValid: true,
        english_meaningValid: true,
        Vietnamese_meaningValid: true,
        formValid: true
      });
    } else {
      //ADD
      this.setState({
        values: {
          ...this.state.values,
          image: "",
          title: "",
          content: "",
          english_meaning: "",
          Vietnamese_meaning: ""
        },
        imageValid: false,
        titleValid: false,
        contentValid: false,
        english_meaningValid: false,
        Vietnamese_meaningValid: false,
        formValid: false
      });
    }
  }

  render() {
    return (
      <div>
        <div className="modal-header">
          {this.props.editInfoMovie === null ? (
            <h5 className="modal-title">ADD MOVIE</h5>
          ) : (
            <h5 className="modal-title">EDIT MOVIE</h5>
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
        <div className="modal-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>
                Tiêu đề
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tiêu đề"
                  onChange={this.handleOnchange}
                  onBlur={this.handleErrors}
                  onKeyUp={this.handleErrors}
                  name="title"
                  value={this.state.values.title}
                />
              </label>
              {this.state.errors.title !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.title}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <label>Nội dung</label>
                  <ReactSummernote
                    value={this.state.values.content}
                    name="content"
                    options={{
                      lang: "ru-RU",
                      height: 150,
                      dialogsInBody: true,
                      value: "asdasd",
                      toolbar: [
                        ["style", ["style"]],
                        ["font", ["bold", "underline", "clear"]],
                        ["fontname", ["fontname"]],
                        ["color", ["Rencent  Color"]],
                        ["para", ["ul", "ol", "paragraph"]],
                        ["table", ["table"]],
                        ["insert", ["link", "picture", "video"]],
                        ["view", ["fullscreen", "codeview"]]
                      ]
                    }}
                    onChange={this.onChange}
                    onBlur={this.onErrorContent}
                    onKeyUp={this.onErrorContent}
                  />
                </div>
              </div>
              {this.state.errors.content !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.content}
                </div>
              ) : (
                ""
              )}
            </div>

            {/*            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <button
                  type="reset"
                  className="btn iq-bg-danger"
                  style={{ marginRight: 10 }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </ul>
            </nav> */}
            <div className="form-group m-0">
              <label>
                Hình ảnh
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hình ảnh"
                  onChange={this.handleOnchange}
                  onBlur={this.handleErrors}
                  onKeyUp={this.handleErrors}
                  name="image"
                  value={this.state.values.image}
                />
              </label>
              {this.state.errors.image !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.image}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group m-0">
              <label>
                English
                <input
                  type="text"
                  className="form-control"
                  placeholder="English"
                  onChange={this.handleOnchange}
                  onBlur={this.handleErrors}
                  onKeyUp={this.handleErrors}
                  name="english_meaning"
                  value={this.state.values.english_meaning}
                />
              </label>
              {this.state.errors.english_meaning !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.english_meaning}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group m-0">
              <label>
                Vietnamese
                <input
                  type="text"
                  className="form-control"
                  placeholder="Vietnamese"
                  onChange={this.handleOnchange}
                  onBlur={this.handleErrors}
                  onKeyUp={this.handleErrors}
                  name="Vietnamese_meaning"
                  value={this.state.values.Vietnamese_meaning}
                />
              </label>
              {this.state.errors.Vietnamese_meaning !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.Vietnamese_meaning}
                </div>
              ) : (
                ""
              )}
            </div>

            {this.props.editInfoMovie === null ? (
              ""
            ) : (
              <React.Fragment>
                <div className="form-group">
                  <label>Thời gian</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thời gian"
                    value={this.state.values.createdAt}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>Thời gian Update</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thời gian Update"
                    value={this.state.values.updatedAt}
                    disabled
                  />
                </div>
              </React.Fragment>
            )}
            <button
              type="submit"
              className="btn btn-success mt-4"
              disabled={!this.state.formValid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    editInfoMovie: state.deMoReducer.editMovie
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editMovie: data => {
      dispatch(action.actEditMovieAPI(data));
    },
    addMovie: data => {
      dispatch(action.addMoviesApiDevfast(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(childModalMovies);
