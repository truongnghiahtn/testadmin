import * as Actiontype from "./../constants/actionType";
import { CallAPI } from "../../utils/callApi";
import { apiDevFast } from "../../utils/config";
import swal from "sweetalert";
import Axios from "axios";

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
    CallAPI(`suggest/${data}`, "GET", null, null, apiDevFast)
      .then(rs => {
        dispatch({
          type: Actiontype.GET_TRA_CAU_API,
          traCau: rs.data.tratu
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const getTraTuApi = data => {
  return dispatch => {
    CallAPI(`WBBcwnwQpV89/s/${data}/vi`)
      .then(rs => {
        dispatch({
          type: Actiontype.GET_TRA_TU_API,
          traTu: rs.data.tratu[0]
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
          video: rs.data.transcripts
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

//Movies Admin
export const getMoviesApiDevfast = () => {
  return dispatch => {
    /*     Axios({
      method: "GET",
      url: "http://apitracau.devfast.net/movies"
    }) */
    CallAPI("movies", "GET", null, null, apiDevFast)
      .then(res =>
        dispatch({
          type: Actiontype.GET_MOVIES_API_DEVFAST,
          dataMovies: res.data
        })
      )
      .catch(err => {
        console.log(err);
      });
  };
};

export const addMoviesApiDevfast = data => {
  return dispatch => {
    CallAPI("movies", "POST", data, null, apiDevFast)
      .then(res => {
        swal({
          title: "Good job!",
          text: `${res.statusText}!`,
          icon: "success",
          buttons: false,
          timer: 1500
        });
        dispatch({
          type: Actiontype.ADD_MOVIES_API_DEVFAST,
          movie: res.data
        });
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Error",
            text: ` ${err.response.data.error} !`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
        console.log(err);
      });
  };
};

export const actOnEditMovie = () => {
  return dispatch => {
    dispatch({ type: Actiontype.EDIT_MOVIE, movie: null });
  };
};

export const actGetEditMovie = data => {
  return dispatch => {
    dispatch({ type: Actiontype.GET_EDIT_MOVIE, movie: data });
  };
};

export const actEditMovieAPI = data => {
  return dispatch => {
    CallAPI(`movies/${data.id}`, "PUT", data, null, apiDevFast)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch(
          {
            type: Actiontype.EDIT_MOVIES_API_DEVFAST,
            movie: res.data
          },
          console.log(res)
        );
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Error",
            text: ` ${err.response.data.error} !`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
      });
  };
};

export const actDelMovieAPI = id => {
  return dispatch => {
    CallAPI(`movies/${id}`, "DELETE", null, null, apiDevFast)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.DEL_MOVIES_API_DEVFAST,
          idMovie: res.data.data._id
        });
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Error",
            text: ` ${err.response.data.error} !`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
      });
  };
};

export const saveWord = word => {
  return dispatch => {
    dispatch({
      type: Actiontype.SAVE_WORD,
      word
    });
  };
};
