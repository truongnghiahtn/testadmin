import React, { Component } from "react";
import { connect } from "react-redux";
import { data } from "./dataWord";
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
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import $ from "jquery";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class childModalWords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: "",
        word_name: "",
        Vietnamese_meaning: "",
        video: [],
        audio: "",
        grammar: "",
        quotes: "",
        synonym: "",
        technical_term: "",
        english_to_Vietnamese: "",
        english_to_English: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      },
      errors: {
        word_name: "",
        Vietnamese_meaning: ""
      },
      formValid: false,
      word_nameValid: false,
      Vietnamese_meaningValid: false,
      data: ""
    };
  }

  componentDidMount() {
    $(".custom-file-input").on("change", function() {
      var fileName = $(this)
        .val()
        .split("\\")
        .pop();
      $(this)
        .siblings(".custom-file-label")
        .addClass("selected")
        .html(fileName);
    });
  }

  convertHTML = html => {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  renderTab = () => {
    return data.map((item, index) => (
      <li className="nav-item" key={index}>
        <a
          className={index === 0 ? "nav-link active" : "nav-link"}
          id={`pills-${item.id}-tab-fill`}
          data-toggle="pill"
          href={`#pills-${item.id}-fill`}
          role="tab"
        >
          {item.name}
        </a>
      </li>
    ));
  };

  checkFieldValue = name => {
    switch (name) {
      case "grammar":
        return this.state.values.grammar;
      case "quotes":
        return this.state.values.quotes;
      case "synonym":
        return this.state.values.synonym;
      case "technical_term":
        return this.state.values.technical_term;
      case "english_to_Vietnamese":
        return this.state.values.english_to_Vietnamese;
      case "english_to_English":
        return this.state.values.english_to_English;
      default:
        break;
    }
  };

  renderContentTab = () => {
    return data.map((item, index) => (
      <div
        className={index === 0 ? "tab-pane fade show active" : "tab-pane fade"}
        id={`pills-${item.id}-fill`}
        role="tabpanel"
        key={index}
      >
        <ReactSummernote
          value={this.checkFieldValue(item.id)}
          name={item.id}
          options={{
            lang: "ru-RU",
            height: 200,
            dialogsInBody: true,
            value: "",
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
          onChange={c => {
            this.setState({
              values: {
                ...this.state.values,
                [item.id]: c
              }
            });
          }}
        />
      </div>
    ));
  };

  handleOnchange = event => {
    this.setState(
      {
        values: {
          ...this.state.values,
          [event.target.name]: event.target.value
        },
        [event.target.name]: event.target.value
      },
      () => {
        console.log(this.state.data);
      }
    );
  };

  handleOnchangeAudio = e => {
    this.setState({
      values: {
        ...this.state.values,
        audio: e.target.files[0]
      }
    });
  };

  handleErrors = event => {
    let { name, value } = event.target;
    let message = value === "" ? "Do not be empty" : "";
    let { word_nameValid, Vietnamese_meaningValid } = this.state;
    switch (name) {
      case "word_name":
        word_nameValid = message !== "" ? false : true;
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
        word_nameValid,
        Vietnamese_meaningValid
      },
      () => {
        this.FormValidation();
      }
    );
  };
  FormValidation = () => {
    this.setState({
      formValid: this.state.word_nameValid && this.state.Vietnamese_meaningValid
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.props.editInfoWord === null) {
      this.props.addWord(this.state.values);
      console.log(this.state.values);
      this.setState({
        values: {
          ...this.state.values,
          word_name: "",
          Vietnamese_meaning: "",
          video: [],
          audio: null,
          grammar: "",
          quotes: "",
          synonym: "",
          technical_term: "",
          english_to_Vietnamese: "",
          english_to_English: ""
        },
        formValid: false,
        word_nameValid: false,
        Vietnamese_meaningValid: false
      });
    } else {
      this.props.editWord(this.state.values);
      console.log(this.state.values);
    }
  };
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.editInfoWord.video)

    if (nextProps && nextProps.editInfoWord) {
      //Update
      let TestVideo = nextProps.editInfoWord.video;
      console.log(!Array.isArray(TestVideo), TestVideo);
      if (!Array.isArray(TestVideo) && TestVideo) {
        TestVideo = TestVideo.split(",");
        console.log(TestVideo);
      }
      this.setState({
        values: {
          ...this.state.values,
          word_name: nextProps.editInfoWord.word_name,
          Vietnamese_meaning: nextProps.editInfoWord.Vietnamese_meaning,
          video: TestVideo,
          audio: nextProps.editInfoWord.audio,
          quotes: nextProps.editInfoWord.quotes,
          synonym: nextProps.editInfoWord.synonym,
          grammar: nextProps.editInfoWord.grammar,
          id: nextProps.editInfoWord._id,
          technical_term: nextProps.editInfoWord.technical_term,
          english_to_Vietnamese: nextProps.editInfoWord.english_to_Vietnamese,
          english_to_English: nextProps.editInfoWord.english_to_English,
          createdAt: nextProps.editInfoWord.createdAt,
          updatedAt: nextProps.editInfoWord.updatedAt
        },
        errors: {
          ...this.state.errors,
          word_name: "",
          Vietnamese_meaning: ""
        },
        formValid: true,
        word_nameValid: true,
        Vietnamese_meaningValid: true
      });
    } else {
      //ADD
      this.setState({
        values: {
          ...this.state.values,
          word_name: "",
          Vietnamese_meaning: "",
          video: [],
          audio: null,
          grammar: "",
          quotes: "",
          synonym: "",
          technical_term: "",
          english_to_Vietnamese: "",
          english_to_English: ""
        },
        formValid: false,
        word_nameValid: false,
        Vietnamese_meaningValid: false
      });
    }
  }

  handleOnchangeVideo = e => {
    console.log(e);
  };
  pushdatavideo = () => {
    let { data } = this.state;
    let updatevideo = this.state.values.video;
    updatevideo = [...this.state.values.video, data];
    this.setState(
      {
        values: {
          ...this.state.values,
          video: updatevideo
        },
        data: ""
      },
      () => {
        console.log(this.state.values.video);
      }
    );
  };
  xoadulieu = index => {
    let updatevideo = this.state.values.video;
    updatevideo.splice(index, 1);
    this.setState({
      values: {
        ...this.state.values,
        video: updatevideo
      }
    });
  };

  rendervideo = () => {
    console.log(this.state.values.video);
    if (this.state.values.video) {
      return this.state.values.video.length
        ? this.state.values.video.map((item, index) => {
            return (
              <div className="dinh_dang_input">
                <input
                  type="text"
                  className="form-control"
                  value={item}
                  key={index}
                />{" "}
                <p
                  className="btn btn-danger xoa"
                  onClick={() => {
                    this.xoadulieu(index);
                  }}
                >
                  delete
                </p>
              </div>
            );
          })
        : "";
    }
  };

  render() {
    return (
      <div>
        <div className="modal-header">
          {this.props.editInfoWord === null ? (
            <h5 className="modal-title">
              <img src="/assets/images/language/uk_big.png" alt="" />
              <span>&nbsp;Thêm từ / câu</span>
            </h5>
          ) : (
            <h5 className="modal-title">Sửa từ / câu</h5>
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
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label style={{ width: "100%" }}>
                    Từ / Câu tiếng anh
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      onChange={this.handleOnchange}
                      onBlur={this.handleErrors}
                      onKeyUp={this.handleErrors}
                      name="word_name"
                      value={
                        this.state.values.word_name
                          ? this.state.values.word_name
                          : ""
                      }
                    />
                  </label>

                  {this.state.errors.word_name !== "" ? (
                    <div className="Form_err errform">
                      (*) {this.state.errors.word_name}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label style={{ width: "100%" }}>
                    Từ / Câu tiếng việt
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
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
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label style={{ width: "100%" }}>
                    Audio
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        placeholder="Audio"
                        onChange={this.handleOnchangeAudio}
                        name="audio"
                        accept="audio/*"
                        /* value={
                          this.state.values.audio ? this.state.values.audio : ""
                        } */
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                      </label>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div className="form-group">
                  <label style={{ width: "100%" }}>
                    Video
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      onChange={this.handleOnchange}
                      name="data"
                      value={this.state.data}
                    />
                    {this.rendervideo()}
                    {/* {this.state.values.video.map((item, index) => {
                      return (
                        <React.Fagment>
                          
                          {index === 0 ? (
                            <button
                              className="btn btn-primary form-control"
                              style={{ lineHeight: "initial" }}
                              onClick={() => {}}
                            >
                              Thêm video
                            </button>
                          ) : (
                            ""
                          )}
                        </React.Fagment>
                      );
                    })} */}
                  </label>
                </div>
              </div>
              <div className="col-2" style={{ lineHeight: "83px" }}>
                <p
                  className="btn btn-primary form-control pt-2 mt-3"
                  style={{ lineHeight: "initial" }}
                  onClick={this.pushdatavideo}
                >
                  Thêm video
                </p>
              </div>
            </div>
            <div className="tab-form">
              <div>
                <ul
                  className="nav nav-pills mb-3 nav-fill"
                  id="pills-tab-1"
                  role="tablist"
                >
                  {this.renderTab()}
                </ul>
                <div className="tab-content" id="pills-tabContent-1">
                  {this.renderContentTab()}
                </div>
              </div>
            </div>
            {this.props.editInfoWord === null ? (
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

            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <button
                  type="reset"
                  className="btn iq-bg-danger"
                  style={{ marginRight: 10 }}
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!this.state.formValid}
                >
                  Submit
                </button>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    editInfoWord: state.deMoReducer.editWord
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editWord: data => {
      dispatch(action.actEditWordAPI(data));
    },
    addWord: data => {
      dispatch(action.addWordsApiDevfast(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(childModalWords);
