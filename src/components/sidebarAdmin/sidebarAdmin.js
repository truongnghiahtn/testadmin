import React, { Component } from "react";

export default class sidebarAdmin extends Component {
  render() {
    return (
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <a href="index.html">
            <img src="images/logo-base.png" className="img-fluid" alt />
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
                <a href="javascript:void(0);" className="iq-waves-effect">
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
                <a href="javascript:void(0);" className="iq-waves-effect">
                  <i className="fa fa-language" aria-hidden="true" />
                  <span>Ngôn ngữ</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu">
                  <li>
                    <a href="english.html">
                      <i className="fa fa-flag-checkered" aria-hidden="true" />
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
    );
  }
}
