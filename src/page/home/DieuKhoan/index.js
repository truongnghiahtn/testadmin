import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action";
import PageTitleArea from "../../../components/PageTitleArea";

const DieuKhoan = props => {
  React.useEffect(() => {
    props.getDataPage("TERM");
  }, []);
  return (
    <Fragment>
      <PageTitleArea title="Điều khoản" />
      <div className="dieukhoan-area">
        <div className="container">
          {props.dataTerm ? (
            <div
              dangerouslySetInnerHTML={{
                __html: props.dataTerm.content
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
    dataTerm: state.deMoReducer.dataTerm
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDataPage: typePage => {
      dispatch(action.getDataPage(typePage));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DieuKhoan);
