import * as Actiontype from "./../constants/actionType";
import { CallAPI } from "../../utils/callApi";

export const getDataSearchApi = data => {
  return dispatch => {
    if (data) {
      CallAPI(`WBBcwnwQpV89/a/${data}`).then(rs => {
        dispatch({
          type: Actiontype.GET_DATA_SEARCH,
          dataSearch: rs.data.tratu
        });
      });
    } else {
      dispatch({
        type: Actiontype.GET_DATA_SEARCH,
        dataSearch: []
      });
    }
  };
};
