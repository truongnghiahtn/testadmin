import React, { Component } from 'react'
import HeaderAdmin from "./../../../components/headerAdmin/headerAdmin"
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale

export default class add_movie extends Component {
    onChange(content) {
        console.log("onChange", content);
      }
      rendersumernote = () => {
        return (
          <ReactSummernote
            options={{
              lang: "ru-RU",
              height: 400,
              dialogsInBody: true,
              toolbar: [
                ["style", ["style"]],
                ["font", ["bold", "underline", "clear"]],
                ["fontname", ["fontname"]],
                ["color",["Rencent  Color"]],
                ["para", ["ul", "ol", "paragraph"]],
                ["table", ["table"]],
                ["insert", ["link", "picture", "video"]],
                ["view", ["fullscreen", "codeview"]]
              ]
            }}
            onChange={this.onChange}
          />
        );
      };
    render() {
        return (
            <div id="content-page" className="content-page">
        {/* TOP Nav Bar */}
        <div className="iq-top-navbar">
          <div className="iq-navbar-custom">
            <div className="iq-sidebar-logo">
              <div className="top-logo">
                <a href="index.html" className="logo">
                  <img src="images/logo.png" className="img-fluid" />
                  <span>XRay</span>
                </a>
              </div>
            </div>
            <HeaderAdmin />
          </div>
        </div>
        {/* TOP Nav Bar END */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">
                      <img
                        src="/assets/images/language/uk_big.png"
                        style={{ marginRight: 10 }}
                      />
                      Thông tin website
                    </h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div className="form-group">
                    <ul
                      className="nav nav-pills mb-3 nav-fill"
                      id="pills-tab-1"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="pills-home-tab-fill"
                          data-toggle="pill"
                          href="#pills-home-fill"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Giới thiệu
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-profile-tab-fill"
                          data-toggle="pill"
                          href="#pills-profile-fill"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Điều khoản
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="pills-contact-tab-fill"
                          data-toggle="pill"
                          href="#pills-contact-fill"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Thông tin mail
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent-1">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home-fill"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab-fill"
                      >
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col">
                              <label>Tiêu đề</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col">
                              <label>Tiêu đề</label>
                              {this.rendersumernote()}
                            </div>
                          </div>
                        </div>
                        <nav aria-label="Page navigation example">
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
                        </nav>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile-fill"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab-fill"
                      >
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col">
                              <label>Tiêu đề</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col">
                              <label>Nội dung</label>
                            {this.rendersumernote()}
                            </div>
                          </div>
                        </div>
                        <nav aria-label="Page navigation example">
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
                        </nav>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact-fill"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab-fill"
                      >
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col">
                              <label>Mail Server</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="form-row">
                            <div className="col">
                              <label>Mail nhận</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder
                              />
                            </div>
                          </div>
                        </div>
                        <nav aria-label="Page navigation example">
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
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-white iq-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="terms-of-service.html">Terms of Use</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 text-right">
                Copyright 2020 <a href="#">XRay</a> All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
        {/* Footer END */}
      </div>
        )
    }
}
