import React from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action";
import PageTitleArea from "../../../components/PageTitleArea";

const GioiThieu = props => {
  React.useEffect(() => {
    props.getDataPage("INTRO");
  }, []);
  return (
    <div>
      <PageTitleArea title="Giới thiệu" />
      <div className="main-page-content">
        {props.dataIntro ? <div>{props.dataIntro.content}</div> : ""}
      </div>
    </div>
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
