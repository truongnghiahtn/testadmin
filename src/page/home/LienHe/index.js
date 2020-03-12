import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action";
import PageTitleArea from "../../../components/PageTitleArea";

const LienHe = props => {
  React.useEffect(() => {
    props.getDataPage("CONTACT");
  }, []);
  return (
    <Fragment>
      <PageTitleArea title="Liên hệ" />
      {props.dataContact ? <div>{props.dataContact.content}</div> : ""}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    dataContact: state.deMoReducer.dataContact
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataPage: typePage => {
      dispatch(action.getDataPage("TERM"));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LienHe);
