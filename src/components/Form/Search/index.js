import React, { useState, useEffect } from "react";
import "./style.scss";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import * as $ from "jquery";
const Search = props => {
  const [prevKw, setPrevKw] = useState("");
  const [currentKw, setCurrentKw] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    if (prevKw === currentKw && currentKw) {
      props.getDataSearchApi(currentKw);
      setPrevKw("");
    }
    if (props.dataSearch.length) setIsSubmit(false);
    if (props.dataSearch.length && currentKw && !isSubmit)
      $("#tc-content-search").addClass("show");
    else $("#tc-content-search").removeClass("show");

    $(document).on("click", function(e) {
      e.target.id != "tc-s"
        ? $("#tc-content-search").removeClass("show")
        : $("#tc-content-search").addClass("show");
    });
  }, [prevKw, currentKw, props.dataSearch]);

  const renderDataSearch = () => {
    return props.dataSearch.map((item, index) => {
      return (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: item.fields.shorttext }}
          className="s-suggest-content"
          onClick={() => {
            handleDataSearch(item.fields.word);
            $("#tc-s")[0].value = item.fields.word;
          }}
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

  const handleOnSubmit = e => {
    e.preventDefault();
    setTimeout(() => {
      if ($(".s-suggest-content").length) {
        $(".s-suggest-content")[0].click();
        setIsSubmit(false);
      } else {
        handleDataSearch(currentKw);
        setIsSubmit(true);
      }
    }, 1000);
  };

  const handleDataSearch = data => {
    data = data.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
      ""
    );
    let lang = !data.match(
      "[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    )
      ? "en"
      : "vi";
    props.saveWord(data);
    props.getTraCauApi(data, lang);
    props.getTraTuApi(data, lang);
    props.getPhuDePhimApi(data, lang);
    props.getVideoApi(data, lang);
  };
  return (
    <section className="search-section home-search">
      {/* <h1 className="search-title">FIDING ME</h1> */}
      <img className="search-title " src="./assets/images/logo-findingme.svg"  ></img>
      <div className="masthead text-center">
        <div className="container">
          <div className="tc-header">
            <form
              id="tc-search-form"
              className="tc-search"
              onSubmit={handleOnSubmit}
            >
              <div className="tc-search-textboxwrap">
                <div
                  id="tc-b"
                  className="tc-search-button"
                  onClick={handleOnSubmit}
                >
                  <i className="fab fa-search"></i>
                </div>
                <input
                  id="tc-s"
                  className="tc-search-textbox"
                  type="text"
                  placeholder="Typing your words"
                  name="keyword"
                  autoFocus
                  autoComplete="off"
                  onChange={handleOnChange}
                />
                <div
                  id="tc-x"
                  className="tc-search-clearbutton"
                  style={{ display: "none" }}
                >
                  x
                </div>
              </div>
            </form>
            <div id="tc-content-search">
              {props.dataSearch.length > 0 ? renderDataSearch() : ""}
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
    saveWord: word => {
      dispatch(action.saveWord(word));
    },
    getTraCauApi: (data, lang) => {
      dispatch(action.getTraCauApi(data, lang));
    },
    getTraTuApi: (data, lang) => {
      dispatch(action.getTraTuApi(data, lang));
    },
    getPhuDePhimApi: (data, lang) => {
      dispatch(action.getPhuDePhimApi(data, lang));
    },
    getVideoApi: data => {
      dispatch(action.getVideoApi(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
