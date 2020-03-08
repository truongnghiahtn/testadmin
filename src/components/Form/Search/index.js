import React, { useState, useEffect } from "react";
import "./style.scss";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import * as $ from "jquery";
const Search = props => {
  const [prevKw, setPrevKw] = useState("");
  const [currentKw, setCurrentKw] = useState("");
  useEffect(() => {
    if (prevKw === currentKw && currentKw) {
      props.getDataSearchApi(currentKw);
      setPrevKw("");
    }
    if (props.dataSearch.length && currentKw) {
      $("#tc-content-search").addClass("show");
    } else {
      $("#tc-content-search").removeClass("show");
    }

    $(document).on("click", function(e) {
      e.target.id != "tc-s"
        ? $("#tc-content-search").removeClass("show")
        : $("#tc-content-search").addClass("show");

      // if ($("#tc-content-search").has(e.target).length !== 0) {
      //   $("#tc-content-search").addClass("show");
      // }
    });

    $(".autocomplete-suggestion").on("click", function(e) {
      let dataVal = $(this).attr("data-val");
      props.getTraCauApi(dataVal);
      props.getPhuDePhimApi(dataVal);
      props.getVideoApi(dataVal);
    });
  }, [prevKw, currentKw, props.dataSearch]);

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
    if (!value) {
      props.getDataSearchApi(value);
    }
    setCurrentKw(value);
    setTimeout(() => {
      setPrevKw(value);
    }, 500);
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
                  <div id="tc-content-search">
                    {props.dataSearch.length > 0 ? renderDataSearch() : ""}
                  </div>
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
    },
    getTraCauApi: data => {
      dispatch(action.getTraCauApi(data));
    },
    getPhuDePhimApi: data => {
      dispatch(action.getPhuDePhimApi(data));
    },
    getVideoApi: data => {
      dispatch(action.getVideoApi(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
