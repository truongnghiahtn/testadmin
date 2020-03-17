import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { apiDevFast } from "../../../utils/config";
import swal from "sweetalert";
import LightBoxImage from "./LightBoxImage";
// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
);

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
      imageValid: true,
      titleValid: false,
      contentValid: false,
      english_meaningValid: false,
      Vietnamese_meaningValid: false,
      files: [
        {
          source: "index.html",
          options: {
            type: "local"
          }
        }
      ],
      hidden: false,
      toggler: false
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
  onChange = content => {
    this.setState({
      values: { ...this.state.values, content }
    });
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
      titleValid,
      english_meaningValid,
      Vietnamese_meaningValid
    } = this.state;
    switch (name) {
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
      /* this.setState({
        values: {
          ...this.state.values,
          image: "",
          title: "",
          content: "",
          english_meaning: "",
          Vietnamese_meaning: ""
        },
        imageValid: true,
        titleValid: false,
        contentValid: false,
        english_meaningValid: false,
        Vietnamese_meaningValid: false,
        formValid: false,
        files: [
          {
            source: "index.html",
            options: {}
          }
        ],
        hidden: false
      }); */
    } else {
      this.props.editMovie(this.state.values);
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editInfoMovie) {
      //Update
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
        formValid: true,
        files: [
          {
            source: `http://27.71.233.139:3001${nextProps.editInfoMovie.image}`
          }
        ],
        hidden: false
      });
    } else {
      //ADD
      this.setState({
        values: {
          ...this.state.values,
          image: null,
          title: "",
          content: "",
          english_meaning: "",
          Vietnamese_meaning: ""
        },
        imageValid: true,
        titleValid: false,
        contentValid: false,
        english_meaningValid: false,
        Vietnamese_meaningValid: false,
        formValid: false,
        files: [
          {
            source: "index.html",
            options: {}
          }
        ],
        hidden: false
      });
    }
  }

  checkFile = () => {
    swal({
      title: "Bạn có chắc không?",
      text: "Sau khi chỉnh sửa, bạn sẽ không thể khôi phục tệp hình ảnh này!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        this.setState({
          values: {
            ...this.state.values,
            image: ""
          },
          files: [],
          hidden: true
        });
      } else {
        swal("Tệp hình ảnh của bạn an toàn!");
      }
    });
  };

  render() {
    return (
      <>
        <div>
          <div className="modal-header">
            {this.props.editInfoMovie === null ? (
              <h5 className="modal-title">Thêm phim</h5>
            ) : (
              <h5 className="modal-title">Sửa phim</h5>
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
                  Tên phim
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên phim"
                    onChange={this.handleOnchange}
                    onBlur={this.handleErrors}
                    onKeyUp={this.handleErrors}
                    name="title"
                    value={
                      this.state.values.title ? this.state.values.title : ""
                    }
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

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label style={{ width: "100%" }}>
                      EN
                      <input
                        type="text"
                        className="form-control"
                        placeholder="English"
                        onChange={this.handleOnchange}
                        onBlur={this.handleErrors}
                        onKeyUp={this.handleErrors}
                        name="english_meaning"
                        value={
                          this.state.values.english_meaning
                            ? this.state.values.english_meaning
                            : ""
                        }
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
                </div>
                <div className="col">
                  <div className="form-group">
                    <label style={{ width: "100%" }}>
                      VN
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Vietnamese"
                        onChange={this.handleOnchange}
                        onBlur={this.handleErrors}
                        onKeyUp={this.handleErrors}
                        name="Vietnamese_meaning"
                        value={
                          this.state.values.Vietnamese_meaning
                            ? this.state.values.Vietnamese_meaning
                            : ""
                        }
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
                </div>
              </div>
              {this.props.editInfoMovie && !this.state.hidden ? (
                <div className="row justify-content-center">
                  <div className="lightbox">
                    <div className="image-hover img-inner-shadow">
                      <img
                        className="img-fluid"
                        src={apiDevFast + "/" + this.state.values.image}
                        alt="!#"
                      />
                      <div
                        className="layer"
                        onClick={() => {
                          this.setState({
                            ...this.state,
                            toggler: !this.state.toggler
                          });
                          window.$(".fslightbox-source").css("width", "auto");
                        }}
                      ></div>
                    </div>

                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => this.checkFile()}
                    >
                      Sửa ảnh
                    </button>
                  </div>
                </div>
              ) : (
                <React.Fragment>
                  <FilePond
                    files={
                      this.props.editInfoMovie || this.state.values.image
                        ? this.state.files
                        : null
                    }
                    allowMultiple={false}
                    maxFiles={1}
                    acceptedFileTypes={["image/*"]}
                    onupdatefiles={fileItems => {
                      fileItems.length > 0
                        ? this.setState({
                            values: {
                              ...this.state.values,
                              image: fileItems[0].file
                            },
                            imageValid: true,
                            files: fileItems.map(item => item.file)
                          })
                        : this.setState({
                            values: {
                              ...this.state.values,
                              image: ""
                            },
                            imageValid: true,
                            files: []
                          });
                    }}
                  />
                  {this.state.errors.image !== "" ? (
                    <div className="Form_err errform">
                      (*) {this.state.errors.image}
                    </div>
                  ) : (
                    ""
                  )}
                </React.Fragment>
              )}

              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label>Phụ đề phim</label>
                    <ReactSummernote
                      value={
                        this.state.values.content
                          ? this.state.values.content
                          : ""
                      }
                      defaultValue=""
                      name="content"
                      options={{
                        lang: "ru-RU",
                        height: 200,
                        dialogsInBody: true,
                        value: "asdasd",
                        toolbar: [
                          ["style", ["style"]],
                          ["font", ["bold", "underline", "clear"]],
                          ["fontname", ["fontname"]],
                          ["color", ["color"]],
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
                  <div className="Form_err errform errform-summernote">
                    (*) {this.state.errors.content}
                  </div>
                ) : (
                  ""
                )}
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
        <div>
          <LightBoxImage
            image={this.state.values.image}
            toggler={this.state.toggler}
          />
        </div>
      </>
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
