import * as Actiontype from "./../constants/actionType";
import { CallAPI } from "../../utils/callApi";
export const getDataSearchApi = data => {
  return dispatch => {
    if (data) {
      CallAPI(`WBBcwnwQpV89/a/${data}`)
        .then(rs => {
          dispatch({
            type: Actiontype.GET_DATA_SEARCH,
            dataSearch: rs.data.tratu
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      dispatch({
        type: Actiontype.GET_DATA_SEARCH,
        dataSearch: []
      });
    }
  };
};

export const getTraCauApi = data => {
  return dispatch => {
    CallAPI(`WBBcwnwQpV89/s/${data}/vi`)
      .then(rs => {
        dispatch({
          type: Actiontype.GET_TRA_CAU_API,
          traCau: rs.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getPhuDePhimApi = data => {
  return dispatch => {
    CallAPI(`WBBcwnwQpV89/sub/${data}/en`)
      .then(rs => {
        dispatch({
          type: Actiontype.GET_PHU_DE_PHIM_API,
          phuDePhim: rs.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getVideoApi = data => {
  return dispatch => {
    CallAPI(`WBBcwnwQpV89/trans/${data}`)
      .then(rs => {
        dispatch({
          type: Actiontype.GET_VIDEO_API,
          video: rs.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
