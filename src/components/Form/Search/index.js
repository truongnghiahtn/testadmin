import React, { useState, useEffect } from "react";
import "./style.scss";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
const Search = props => {
  const [prevKw, setPrevKw] = useState("");
  const [currentKw, setCurrentKw] = useState("");
  useEffect(() => {
    if (prevKw === currentKw && currentKw) {
      props.getDataSearchApi(currentKw);
    }
  }, [prevKw, currentKw]);

  const renderDataSearch = () => {
    return props.dataSearch.map((item, index) => {
      return (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: item.fields.shorttext }}
        ></div>
      );
    });
  };

  const handleOnChange = event => {
    let value = event.target.value;
    setCurrentKw(value);
    setTimeout(() => {
      setPrevKw(value);
    }, 2000);
  };

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
                        name="keyword"
                        autoFocus
                        autoComplete="off"
                        // onChange={handleOnChange}
                        onKeyUp={handleOnChange}
                      />
                      <div id="tc-d" className="tc-search-selectbox">
                        <select id="tc-db">
                          <option value="en">Tiếng Anh</option>
                          <option value="fr">Tiếng Pháp</option>
                          <option value="jp">Tiếng Nhật</option>
                        </select>
                      </div>
                      <div id="tc-b" className="tc-search-button">
                        <i className="fab fa-search"></i>
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
                  <div id="tc-content-search">{renderDataSearch()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    dataSearch: state.deMoReducer.dataSearch
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDataSearchApi: data => {
      dispatch(action.getDataSearchApi(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
