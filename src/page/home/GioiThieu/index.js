import React from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action";

const GioiThieu = props => {
  React.useEffect(() => {
    props.getDataPage("INTRO");
  }, []);
  return (
    <h1 style={{ padding: "100px 0", textAlign: "center", color: "red" }}>
      GioiThieu
    </h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(GioiThieu);
