import React, { useState, useEffect } from "react";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles
import "react-summernote/lang/summernote-ru-RU"; // you can import any other locale
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import { dataInfoWebsite } from "./dataInfoWebsite";
import Intro from "./intro";
import Term from "./term";
import Mail from "./mail";

const Website = props => {
  useEffect(() => {
    props.getInfoWebsite("INTRO");
    props.getInfoWebsite("TERM");
  }, []);

  const renderTab = () => {
    return dataInfoWebsite.map((item, index) => (
      <li className="nav-item" key={index}>
        <a
          className={index === 0 ? "nav-link active" : "nav-link"}
          id={`pills-${item.id}-tab-fill`}
          data-toggle="pill"
          href={`#pills-${item.id}-fill`}
          role="tab"
          aria-controls={`pills-${item.id}`}
          aria-selected="true"
        >
          {item.content}
        </a>
      </li>
    ));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">
                  <img
                    src="/assets/images/language/uk_big.png"
                    style={{ marginRight: 10 }}
                  />
                  Thông tin website
                </h4>
              </div>
            </div>
            <div className="iq-card-body">
              <div className="form-group">
                <ul
                  className="nav nav-pills mb-3 nav-fill"
                  id="pills-tab-1"
                  role="tablist"
                >
                  {renderTab()}
                </ul>
                <div className="tab-content" id="pills-tabContent-1">
                  <Intro dataIntro={props.dataIntro} />
                  <Term dataTerm={props.dataTerm} />
                  <Mail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dataTerm: state.deMoReducer.dataTerm,
    dataIntro: state.deMoReducer.dataIntro
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInfoWebsite: name => {
      dispatch(action.getInfoWebsiteApi(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Website);
