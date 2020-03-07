/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

export default class TrangChu extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* Sidebar  */}
        <div className="iq-sidebar">
          <div className="iq-sidebar-logo d-flex justify-content-between">
            <a href="index.html">
              <img
                src="assets/images/logo-base.png"
                className="img-fluid"
                alt
              />
            </a>
            <div className="iq-menu-bt-sidebar">
              <div className="iq-menu-bt align-self-center">
                <div className="wrapper-menu">
                  <div className="main-circle">
                    <i className="ri-more-fill" />
                  </div>
                  <div className="hover-circle">
                    <i className="ri-more-2-fill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="sidebar-scrollbar">
            <nav className="iq-sidebar-menu">
              <ul className="iq-menu">
                <li className="iq-menu-title">
                  <i className="ri-subtract-line" />
                  <span>Trang chủ</span>
                </li>
                <li className="active">
                  <a href="dashboard-1.html" className="iq-waves-effect">
                    <i className="ri-home-8-fill" />
                    <span>Home</span>
                  </a>
                </li>
                <li className="iq-menu-title">
                  <i className="ri-subtract-line" />
                  <span>Quản lý</span>
                </li>
                <li className>
                  <a href="account.html" className="iq-waves-effect">
                    <i className="fa fa-user-circle" aria-hidden="true" />
                    <span>User</span>
                  </a>
                </li>
                <li></li>
                <li className>
                  <a href="website.html" className="iq-waves-effect">
                    <i className="fa fa-chrome" aria-hidden="true" />
                    <span>Website</span>
                  </a>
                </li>
                <li>
                  <a href="" className="iq-waves-effect">
                    <i className="fa fa-address-card-o" aria-hidden="true" />
                    <span>Khách hàng</span>
                    <i className="ri-arrow-right-s-line iq-arrow-right" />
                  </a>
                  <ul className="iq-submenu">
                    <li>
                      <a href="customer.html">
                        <i className="fa fa-id-badge" aria-hidden="true" />
                        Thông tin
                      </a>
                    </li>
                    <li>
                      <a href="contribute.html">
                        <i className="fa fa-book" aria-hidden="true" />
                        Đóng góp
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="" className="iq-waves-effect">
                    <i className="fa fa-language" aria-hidden="true" />
                    <span>Ngôn ngữ</span>
                    <i className="ri-arrow-right-s-line iq-arrow-right" />
                  </a>
                  <ul className="iq-submenu">
                    <li>
                      <a href="english.html">
                        <i
                          className="fa fa-flag-checkered"
                          aria-hidden="true"
                        />
                        Tiếng anh
                      </a>
                    </li>
                    <li>
                      <a href="film.html">
                        <i className="fa fa-film" aria-hidden="true" />
                        Tựa đề phim
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="p-3" />
          </div>
        </div>
        {/* Page Content  */}
        <div id="content-page" className="content-page">
          {/* TOP Nav Bar */}
          <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
              <div className="iq-sidebar-logo">
                <div className="top-logo">
                  <a href="index.html" className="logo">
                    <img
                      src="assets/images/logo.png"
                      className="img-fluid"
                      alt
                    />
                    <span>XRay</span>
                  </a>
                </div>
              </div>
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="ri-menu-3-line" />
                </button>
                <div className="iq-menu-bt align-self-center">
                  <div className="wrapper-menu">
                    <div className="main-circle">
                      <i className="ri-more-fill" />
                    </div>
                    <div className="hover-circle">
                      <i className="ri-more-2-fill" />
                    </div>
                  </div>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto navbar-list">
                    <li className="nav-item iq-full-screen">
                      <a
                        href="#"
                        className="iq-waves-effect"
                        id="btnFullscreen"
                      >
                        <i className="ri-fullscreen-line" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="search-toggle iq-waves-effect">
                        <i className="ri-notification-3-fill" />
                        <span className="bg-danger dots" />
                      </a>
                      <div className="iq-sub-dropdown">
                        <div className="iq-card shadow-none m-0">
                          <div className="iq-card-body p-0 ">
                            <div className="bg-primary p-3">
                              <h5 className="mb-0 text-white">
                                All Notifications
                                <small className="badge  badge-light float-right pt-1">
                                  4
                                </small>
                              </h5>
                            </div>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center">
                                <div className>
                                  <img
                                    className="avatar-40 rounded"
                                    src="assets/images/user/01.jpg"
                                    alt
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">Emma Watson Bini</h6>
                                  <small className="float-right font-size-12">
                                    Just Now
                                  </small>
                                  <p className="mb-0">95 MB</p>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center">
                                <div className>
                                  <img
                                    className="avatar-40 rounded"
                                    src="assets/images/user/02.jpg"
                                    alt
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">
                                    New customer is join
                                  </h6>
                                  <small className="float-right font-size-12">
                                    5 days ago
                                  </small>
                                  <p className="mb-0">Jond Bini</p>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center">
                                <div className>
                                  <img
                                    className="avatar-40 rounded"
                                    src="assets/images/user/03.jpg"
                                    alt
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">
                                    Two customer is left
                                  </h6>
                                  <small className="float-right font-size-12">
                                    2 days ago
                                  </small>
                                  <p className="mb-0">Jond Bini</p>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center">
                                <div className>
                                  <img
                                    className="avatar-40 rounded"
                                    src="assets/images/user/04.jpg"
                                    alt
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">New Mail from Fenny</h6>
                                  <small className="float-right font-size-12">
                                    3 days ago
                                  </small>
                                  <p className="mb-0">Jond Bini</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a href="#" className="search-toggle iq-waves-effect">
                        <i className="ri-mail-open-fill" />
                        <span className="bg-primary count-mail" />
                      </a>
                      <div className="iq-sub-dropdown">
                        <div className="iq-card shadow-none m-0">
                          <div className="iq-card-body p-0 ">
                            <div className="bg-primary p-3">
                              <h5 className="mb-0 text-white">
                                All Messages
                                <small className="badge  badge-light float-right pt-1">
                                  5
                                </small>
                              </h5>
                            </div>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center">
                                <div className>
                                  <img
                                    className="avatar-40 rounded"
                                    src="assets/images/user/01.jpg"
                                    alt
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">Bini Emma Watson</h6>
                                  <small className="float-left font-size-12">
                                    13 Jun
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center">
                                <div className>
                                  <img
                                    className="avatar-40 rounded"
                                    src="assets/images/user/02.jpg"
                                    alt
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                  <small className="float-left font-size-12">
                                    20 Apr
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center">
                                <div className>
                                  <img
                                    className="avatar-40 rounded"
                                    src="assets/images/user/03.jpg"
                                    alt
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">Why do we use it?</h6>
                                  <small className="float-left font-size-12">
                                    30 Jun
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center">
                                <div className>
                                  <img
                                    className="avatar-40 rounded"
                                    src="assets/images/user/04.jpg"
                                    alt
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">Variations Passages</h6>
                                  <small className="float-left font-size-12">
                                    12 Sep
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="iq-sub-card">
                              <div className="media align-items-center">
                                <div className>
                                  <img
                                    className="avatar-40 rounded"
                                    src="assets/images/user/05.jpg"
                                    alt
                                  />
                                </div>
                                <div className="media-body ml-3">
                                  <h6 className="mb-0 ">
                                    Lorem Ipsum generators
                                  </h6>
                                  <small className="float-left font-size-12">
                                    5 Dec
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul className="navbar-list">
                  <li>
                    <a
                      href="#"
                      className="search-toggle iq-waves-effect d-flex align-items-center"
                    >
                      <img
                        src="assets/images/user/1.jpg"
                        className="img-fluid rounded mr-3"
                        alt="user"
                      />
                      <div className="caption">
                        <h6 className="mb-0 line-height">Bini Jets</h6>
                        <span className="font-size-12">Available</span>
                      </div>
                    </a>
                    <div className="iq-sub-dropdown iq-user-dropdown">
                      <div className="iq-card shadow-none m-0">
                        <div className="iq-card-body p-0 ">
                          <div className="bg-primary p-3">
                            <h5 className="mb-0 text-white line-height">
                              Hello Bini Jets
                            </h5>
                            <span className="text-white font-size-12">
                              Available
                            </span>
                          </div>
                          <a
                            href="profile.html"
                            className="iq-sub-card iq-bg-primary-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-primary">
                                <i className="ri-file-user-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">My Profile</h6>
                                <p className="mb-0 font-size-12">
                                  View personal profile details.
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="profile-edit.html"
                            className="iq-sub-card iq-bg-primary-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-primary">
                                <i className="ri-profile-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Edit Profile</h6>
                                <p className="mb-0 font-size-12">
                                  Modify your personal details.
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="account-setting.html"
                            className="iq-sub-card iq-bg-primary-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-primary">
                                <i className="ri-account-box-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Account settings</h6>
                                <p className="mb-0 font-size-12">
                                  Manage your account parameters.
                                </p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="privacy-setting.html"
                            className="iq-sub-card iq-bg-primary-hover"
                          >
                            <div className="media align-items-center">
                              <div className="rounded iq-card-icon iq-bg-primary">
                                <i className="ri-lock-line" />
                              </div>
                              <div className="media-body ml-3">
                                <h6 className="mb-0 ">Privacy Settings</h6>
                                <p className="mb-0 font-size-12">
                                  Control your privacy parameters.
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="d-inline-block w-100 text-center p-3">
                            <a
                              className="bg-primary iq-sign-btn"
                              href="sign-in.html"
                              role="button"
                            >
                              Sign out
                              <i className="ri-login-box-line ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* TOP Nav Bar END */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-6 col-lg-3">
                    <div className="iq-card">
                      <div className="iq-card-body iq-bg-primary rounded">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="rounded-circle iq-card-icon bg-primary">
                            <i className="fas fa-language" />
                          </div>
                          <div className="text-right">
                            <h2 className="mb-0">
                              <span className="counter">5600</span>
                            </h2>
                            <h5 className>Doctors</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="iq-card">
                      <div className="iq-card-body iq-bg-warning rounded">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="rounded-circle iq-card-icon bg-warning">
                            <img src="assets/images/language/uk_big.png" alt />
                          </div>
                          <div className="text-right">
                            <h2 className="mb-0">
                              <span className="counter">3450</span>
                            </h2>
                            <h5 className>Nurses</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="iq-card">
                      <div className="iq-card-body iq-bg-danger rounded">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="rounded-circle iq-card-icon bg-danger">
                            <img
                              src="assets/images/language/france_big.png"
                              alt
                            />
                          </div>
                          <div className="text-right">
                            <h2 className="mb-0">
                              <span className="counter">3500</span>
                            </h2>
                            <h5 className>Patients</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="iq-card">
                      <div className="iq-card-body iq-bg-info rounded">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="rounded-circle iq-card-icon bg-info">
                            <img
                              src="assets/images/language/japan_big.png"
                              alt
                            />
                          </div>
                          <div className="text-right">
                            <h2 className="mb-0">
                              <span className="counter">4500</span>
                            </h2>
                            <h5 className>Pharmacists</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title"> 3D Pie Chart</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div id="am-3dpie-chart" style={{ height: 500 }} />
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
      </div>
    );
  }
}