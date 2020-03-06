/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
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
    $(document).on("click", ".wrapper-menu", function() {
      $(this).toggleClass("open");
      $("body").toggleClass("sidebar-main");
    });

    /* Sidebar Widget */

    function checkClass(ele, type, className) {
      switch (type) {
        case "addClass":
          if (!ele.hasClass(className)) {
            ele.addClass(className);
          }
          break;
        case "removeClass":
          if (ele.hasClass(className)) {
            ele.removeClass(className);
          }
          break;
        case "toggleClass":
          ele.toggleClass(className);
          break;
        default:
          break;
      }
    }
    $(".iq-sidebar-menu .active").each(function(ele, index) {
      $(this)
        .find(".iq-submenu")
        .parent()
        .addClass("menu-open");
      $(this)
        .find(".iq-submenu")
        .addClass("menu-open");
    });
    $(document).on("click", ".iq-sidebar-menu li", function() {
      if ($(this).hasClass("menu-open")) {
        $(this)
          .find(".iq-submenu")
          .slideUp("slow");
        checkClass($(this), "removeClass", "menu-open");
        if (!$(this).find(".iq-submenu.menu-open .menu-open").length) {
          checkClass($(this).find(".menu-open"), "removeClass", "menu-open");
        } else {
          checkClass($(this).find(".iq-submenu"), "removeClass", "menu-open");
        }
      } else if ($(this).find(".iq-submenu").length) {
        $(this)
          .find(".iq-submenu")
          .slideDown("slow");
        checkClass($(this), "addClass", "menu-open");
        checkClass($(this).find(".iq-submenu"), "addClass", "menu-open");
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
                <NavLink  className="iq-waves-effect" to="/admin/dashboard">
                  <i className="ri-home-8-fill" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="iq-menu-title">
                <i className="ri-subtract-line" />
                <span>Quản lý</span>
              </li>
              <li>
                <NavLink  className="iq-waves-effect"  to="/admin/User">
                  <i className="fa fa-user-circle" aria-hidden="true" />
                  <span>User</span>
                </NavLink>
              </li>
              <li></li>
              <li>
                <a href="website.html" className="iq-waves-effect">
                  <i className="fab fa-chrome" aria-hidden="true" />
                  <span>Website</span>
                </a>
              </li>
              <li>
                <a href="#" className="iq-waves-effect">
                  <i className="fa fa-address-card" aria-hidden="true"></i>
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
                <a href="#" className="iq-waves-effect">
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
