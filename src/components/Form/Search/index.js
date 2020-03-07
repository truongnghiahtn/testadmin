import React from "react";
import "./style.scss";
const Search = () => {
  return (
    <section className="search-section home-search">
      <div className="masthead text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-md-auto">
              <div className="tc-header">
                <div className="container px-0">
                  <div
                    id="tc-quote"
                    className="tc-header-title"
                    style={{ display: "none" }}
                  />
                  <form id="tc-search-form" className="tc-search">
                    <span className="tc-search-textboxwrap">
                      <input
                        id="tc-s"
                        className="tc-search-textbox"
                        type="text"
                        placeholder="Nhập từ hoặc câu cần tìm kiếm"
                        name="s"
                        autofocus
                        autoComplete="off"
                      />
                      <div id="tc-d" className="tc-search-selectbox">
                        <select id="tc-db">
                          <option value="en">Tiếng Anh</option>
                          <option value="fr">Tiếng Pháp</option>
                          <option value="jp">Tiếng Nhật</option>
                        </select>
                      </div>
                      <div id="tc-b" className="tc-search-button">
                        <i class="fab fa-search"></i>
                      </div>
                      <div
                        id="tc-x"
                        className="tc-search-clearbutton"
                        style={{ display: "none" }}
                      >
                        x
                      </div>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
