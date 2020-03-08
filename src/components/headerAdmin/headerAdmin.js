import React, { useEffect } from "react";
const $ = window.jQuery;
const HeaderAdmin = () => {
  useEffect(() => {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 75) {
        $(".iq-top-navbar").addClass("fixed-header");
      } else {
        $(".iq-top-navbar").removeClass("fixed-header");
      }
    });

    /* Ripple Effect */
    $(".iq-waves-effect").on("click", function(e) {
      // Remove any old one
      $(".ripple").remove();
      // Setup
      let posX = $(this).offset().left,
        posY = $(this).offset().top,
        buttonWidth = $(this).width(),
        buttonHeight = $(this).height();

      // Add the element
      $(this).prepend("<span class='ripple'></span>");

      // Make it round!
      if (buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
      } else {
        buttonWidth = buttonHeight;
      }

      // Get the center of the element
      let x = e.pageX - posX - buttonWidth / 2;
      let y = e.pageY - posY - buttonHeight / 2;

      // Add the ripples CSS and start the animation
      $(".ripple")
        .css({
          width: buttonWidth,
          height: buttonHeight,
          top: y + "px",
          left: x + "px"
        })
        .addClass("rippleEffect");
    });

    /* FullScreen */
    $(".iq-full-screen").on("click", function() {
      let elem = $(this);
      if (
        !document.fullscreenElement &&
        !document.mozFullScreenElement && // Mozilla
        !document.webkitFullscreenElement && // Webkit-Browser
        !document.msFullscreenElement
      ) {
        // MS IE ab version 11

        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      elem
        .find("i")
        .toggleClass("ri-fullscreen-line")
        .toggleClass("ri-fullscreen-exit-line");
    });

    //   search
    $(".search-toggle").on("click", function(e) {
      let myTargetElement = e.target;
      let selector, mainElement;
      if (
        $(myTargetElement).hasClass("search-toggle") ||
        window
          .jQuery(myTargetElement)
          .parent()
          .hasClass("search-toggle") ||
        window
          .jQuery(myTargetElement)
          .parent()
          .parent()
          .hasClass("search-toggle")
      ) {
        if ($(myTargetElement).hasClass("search-toggle")) {
          selector = $(myTargetElement).parent();
          mainElement = $(myTargetElement);
        } else if (
          window
            .jQuery(myTargetElement)
            .parent()
            .hasClass("search-toggle")
        ) {
          selector = window
            .jQuery(myTargetElement)
            .parent()
            .parent();
          mainElement = $(myTargetElement).parent();
        } else if (
          window
            .jQuery(myTargetElement)
            .parent()
            .parent()
            .hasClass("search-toggle")
        ) {
          selector = window
            .jQuery(myTargetElement)
            .parent()
            .parent()
            .parent();
          mainElement = window
            .jQuery(myTargetElement)
            .parent()
            .parent();
        }
        if (
          !mainElement.hasClass("active") &&
          $(".navbar-list li").find(".active")
        ) {
          $(".navbar-list li").removeClass("iq-show");
          $(".navbar-list li .search-toggle").removeClass("active");
        }

        selector.toggleClass("iq-show");
        mainElement.toggleClass("active");

        e.preventDefault();
      } else if ($(myTargetElement).is(".search-input")) {
      } else {
        $(".navbar-list li").removeClass("iq-show");
        $(".navbar-list li .search-toggle").removeClass("active");
      }
    });
  }, []);

  return (
    <div className="iq-top-navbar">
      <div className="iq-navbar-custom">
        <div className="iq-sidebar-logo">
          <div className="top-logo">
            <a href="index.html" className="logo">
              <img src="/assets/images/logo.png" className="img-fluid" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-list">
              <li className="nav-item iq-full-screen">
                <a href="#" className="iq-waves-effect" id="btnFullscreen">
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
                          <div>
                            <img
                              className="avatar-40 rounded"
                              src="/assets/images/user/01.jpg"
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
                          <div>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/02.jpg"
                            />
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">New customer is join</h6>
                            <small className="float-right font-size-12">
                              5 days ago
                            </small>
                            <p className="mb-0">Jond Bini</p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/03.jpg"
                            />
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">Two customer is left</h6>
                            <small className="float-right font-size-12">
                              2 days ago
                            </small>
                            <p className="mb-0">Jond Bini</p>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="iq-sub-card">
                        <div className="media align-items-center">
                          <div>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/04.jpg"
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
                          <div>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/01.jpg"
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
                          <div>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/02.jpg"
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
                          <div>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/03.jpg"
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
                          <div>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/04.jpg"
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
                          <div>
                            <img
                              className="avatar-40 rounded"
                              src="images/user/05.jpg"
                            />
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">Lorem Ipsum generators</h6>
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
                  src="/assets/images/user/1.jpg"
                  className="img-fluid rounded mr-3"
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
                      <span className="text-white font-size-12">Available</span>
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
  );
};

export default HeaderAdmin;
