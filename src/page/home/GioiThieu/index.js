import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action";
import PageTitleArea from "../../../components/PageTitleArea";

const GioiThieu = props => {
  React.useEffect(() => {
    props.getDataPage("INTRO");
  }, []);
  return (
    <Fragment>
      <PageTitleArea title="Giới thiệu" />
      <div className="gioithieu-area">
        <div className="container">
          {props.dataIntro ? (
            <div
              dangerouslySetInnerHTML={{
                __html: props.dataIntro.content
              }}
            ></div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    dataIntro: state.deMoReducer.dataIntro
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDataPage: typePage => {
      dispatch(action.getDataPage(typePage));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GioiThieu);
