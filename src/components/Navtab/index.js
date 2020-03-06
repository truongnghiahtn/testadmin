import React from "react";
import "./style.scss";
import $ from "jquery";

const Navtab = () => {
  let data = [
    { id: "tracau", name: "tra câu", content: "" },
    { id: "tratu", name: "tra từ", content: "" },
    { id: "phude", name: "phu đề phim", content: "" },
    { id: "video", name: "video", content: "" },
    { id: "hinhanh", name: "hình ảnh", content: "" }
  ];
  const renderTab = () => {
    return data.map((item, index) => {
      return (
        <li className="nav-item" key={index}>
          <a
            className={`nav-link ${index === 0 ? "active" : ""}`}
            id={`${item.id}-tab`}
            data-toggle="tab"
            href={`#${item.id}`}
            role="tab"
            aria-controls="tracau"
            aria-selected="true"
          >
            {item.name}
          </a>
        </li>
      );
    });
  };
  const renderContentTab = () => {
    return data.map((item, index) => {
      return (
        <div
          className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
          id={item.id}
          role="tabpanel"
          style={{ height: "500px", padding: "20px" }}
          key={index}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      );
    });
  };
  $("#myTab").tab("show");
  return (
    <div className="Navtab container">
      <div className="row">
        <div className="col-sm-12">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {renderTab()}
          </ul>
          <div className="tab-content" id="myTabContent">
            {renderContentTab()};
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navtab;
