import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mainnav navbar navbar-default justify-content-between">
      <div className="container relative">
        <div className="tc-site-logo">
          <NavLink title="Tra câu Việt - Anh" to="/">
            <div className="tc-site-logo-text">
              <h1>TRA CÂU</h1>
              <span>&nbsp;VIỆT - ANH</span>
              <h2>Công cụ tìm kiếm các cặp câu song ngữ</h2>
            </div>
          </NavLink>
        </div>
        <div className="paper_menu">
          <div id="dl-menu" className="xv-menuwrapper responsive-menu">
            <ul className="dl-menu align-items-center">
              <li>
                <NavLink to="/gioi-thieu" activeClassName="active">
                  Giới thiệu
                </NavLink>
              </li>
              <li>
                <NavLink to="/dieu-khoan">Điều khoản</NavLink>
              </li>
              <li>
                <NavLink to="/api">API</NavLink>
              </li>
              <li>
                <NavLink to="/bo-sung">Bổ sung câu mới</NavLink>
              </li>
              <li>
                <NavLink to="/lien-he">Liên hệ</NavLink>
              </li>
              <li className="share-menu-item" title data-tlite>
                <div className="heart" />
                <div
                  className="fb-share-button fb_iframe_widget"
                  data-href="https://tracau.vn"
                  data-layout="button_count"
                  data-size="small"
                  data-mobile-iframe="false"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="app_id=272842896385019&container_width=20&href=https%3A%2F%2Ftracau.vn%2F&layout=button_count&locale=en_US&mobile_iframe=false&sdk=joey&size=small"
                >
                  <span
                    style={{ verticalAlign: "bottom", width: 94, height: 20 }}
                  >
                    <iframe
                      width="1000px"
                      height="1000px"
                      title="fb:share_button Facebook Social Plugin"
                      frameBorder={0}
                      allowTransparency="true"
                      allowFullScreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      src="https://www.facebook.com/v3.2/plugins/share_button.php?app_id=272842896385019&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df2d3842d6bcd0c8%26domain%3Dtracau.vn%26origin%3Dhttps%253A%252F%252Ftracau.vn%252Ff2194904ce75f64%26relation%3Dparent.parent&container_width=20&href=https%3A%2F%2Ftracau.vn%2F&layout=button_count&locale=en_US&mobile_iframe=false&sdk=joey&size=small"
                      style={{
                        border: "none",
                        visibility: "visible",
                        width: 94,
                        height: 20
                      }}
                      className
                    />
                  </span>
                </div>
                <div className="heart" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
