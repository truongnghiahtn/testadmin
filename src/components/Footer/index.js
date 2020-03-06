import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="copyright">
          © Copyright by <a href="https://tracau.vn">tracau.vn</a>
        </div>
        <div className="app-links">
          <a
            href="https://itunes.apple.com/vn/app/tra-cau-viet-anh/id884101591?mt=8"
            title="Tra câu Việt - Anh trên nền tảng iOS"
            id="ios"
          >
            <i className="fab fa-apple"></i>
          </a>
          &nbsp;
          <a
            href="https://play.google.com/store/apps/details?id=vn.tracau.android"
            title="Tra câu Việt - Anh trên nền tảng Android"
            id="android"
          >
            <i className="fab fa-android"></i>
          </a>
          &nbsp;
          <a
            href="http://www.windowsphone.com/en-us/store/app/tra-c%C3%A2u-vi%E1%BB%87t-anh/196edb5b-8865-4d9e-b299-b4b63205f21a"
            title="Tra câu Việt - Anh trên nền tảng Windows Phone"
            id="wp"
          >
            <i className="fab fa-windows"></i>
          </a>
          &nbsp;
          <a
            href="http://appworld.blackberry.com/webstore/content/59945005/"
            title="Tra câu Việt - Anh trên nền tảng Blackberry"
          >
            <i className="fab fa-blackberry"></i>
          </a>
          &nbsp;
          <a
            href="https://www.facebook.com/anh.ngu.thuc.hanh"
            title="Cộng đồng Facebook sử dụng công cụ Tra câu"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
