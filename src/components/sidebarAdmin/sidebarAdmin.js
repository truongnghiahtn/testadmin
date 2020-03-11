/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "./style.scss";
const $ = window.jQuery;

export default class sidebarAdmin extends Component {
  componentDidMount() {
    /*---------------------------------------------------------------------
        Scrollbar
    -----------------------------------------------------------------------*/
    let Scrollbar = window.Scrollbar;
    if ($("#sidebar-scrollbar").length) {
      Scrollbar.init(document.querySelector("#sidebar-scrollbar"));
    }
    let Scrollbar1 = window.Scrollbar;
    if ($("#right-sidebar-scrollbar").length) {
      Scrollbar1.init(document.querySelector("#right-sidebar-scrollbar"));
    }

    /*---------------------------------------------------------------------
        Page Menu
    -----------------------------------------------------------------------*/

    $(".wrapper-menu").on("click", function() {
      $(this).toggleClass("open");
      $("body").toggleClass("sidebar-main");
    });

    $("#btn1").on("click", function() {
      if ($("#collapseOne").hasClass("show")) {
        $("#menu1").removeClass("menu-open");
      } else {
        $("#menu1").addClass("menu-open");
      }
    });

    $("#btn2").on("click", function() {
      if ($("#collapseTwo").hasClass("show")) {
        $("#menu2").removeClass("menu-open");
      } else {
        $("#menu2").addClass("menu-open");
      }
    });
  }

  render() {
    return (
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <a href="index.html">
            <img
              src="/assets/images/logo-base.png"
              className="img-fluid"
              alt=""
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
                <NavLink className="iq-waves-effect" to="/admin-dashboard">
                  <i className="ri-home-8-fill" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="iq-menu-title">
                <i className="ri-subtract-line" />
                <span>Quản lý</span>
              </li>
              <li className>
                <NavLink className="iq-waves-effect" to="/movie">
                  <i className="fa fa-film" aria-hidden="true" />
                  <span>Quản lý phim</span>
                </NavLink>
              </li>
              <li></li>
              <li className>
                <NavLink className="iq-waves-effect" to="admin-website">
                  <i className="fab fa-chrome" aria-hidden="true" />
                  <span>Website</span>
                </NavLink>
              </li>
              <li id="menu1">
                <a
                  href="#"
                  className="iq-waves-effect collapsed"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  id="btn1"
                >
                  <i className="fa fa-address-card" aria-hidden="true"></i>
                  <span>Khách hàng</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu collapse" id="collapseOne">
                  <li>
                    <a href="#">
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
              <li id="menu2">
                <a
                  href="#"
                  className="iq-waves-effect collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  id="btn2"
                >
                  <i className="fa fa-language" aria-hidden="true" />
                  <span>Ngôn ngữ</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right" />
                </a>
                <ul className="iq-submenu collapse" id="collapseTwo">
                  <li>
                    <NavLink to="/admin/word">
                      <i className="fa fa-flag-checkered" aria-hidden="true" />
                      Quản trị từ ngữ
                    </NavLink>
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
