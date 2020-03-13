import * as Actiontype from "./../constants/actionType";
import { CallAPI } from "../../utils/callApi";
import { apiDevFast, api } from "../../utils/config";
import swal from "sweetalert";

export const getDataSearchApi = data => {
  return dispatch => {
    if (data) {
      CallAPI(`suggest/${data}`)
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
    CallAPI(`sentence/${data}/en`)
      .then(rs => {
        dispatch({
          type: Actiontype.GET_TRA_CAU_API,
          traCau: rs.data.sentences
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const getTraTuApi = data => {
  return dispatch => {
    CallAPI(`sentence/${data}/en`)
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
    CallAPI(`subtitle/${data}/en`)
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
    CallAPI(`video/${data}`)
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

export const getDataPage = typePage => {
  return dispatch => {
    CallAPI(`staticContent/${typePage}`)
      .then(rs => {
        switch (typePage) {
          case "INTRO":
            dispatch({
              type: Actiontype.GET_INTRO,
              dataIntro: rs.data
            });
            break;
          case "TERM":
            dispatch({
              type: Actiontype.GET_TERM,
              dataTerm: rs.data
            });
            break;
          case "CONTACT":
            dispatch({
              type: Actiontype.GET_CONTACT,
              dataContact: rs.data
            });
            break;
          default:
            break;
        }
      })
      .catch(err => {});
  };
};

export const postNewWordApi = data => {
  return () => {
    CallAPI("words/contribute", "POST", data).then(rs => {
      console.log(rs);
    });
  };
};

//Movies Admin
export const getMoviesApiDevfast = id => {
  return dispatch => {
    CallAPI(`movies?itemPerPage=20&page=${id}`, "GET", null, null, apiDevFast)
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
  /*   const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  }; */
  let formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return dispatch => {
    CallAPI("movies", "POST", formData, null, apiDevFast)
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
            text: ` ${err.response.data.error}!`,
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
  let formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return dispatch => {
    CallAPI(`movies/${data.id}`, "PUT", formData, null, apiDevFast)
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
            text: ` ${err.response.data.error}!`,
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
            text: ` ${err.response.data.error}!`,
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

//Words Admin

export const getAllWordsApiDevfast = () => {
  return dispatch => {
    CallAPI(`words`, "GET", null, null, apiDevFast)
      .then(res =>
        dispatch({
          type: Actiontype.GET_ALL_WORDS_API_DEVFAST,
          dataWords: res.data
        })
      )
      .catch(err => {
        console.log(err);
      });
  };
};

export const getWordsApiDevfast = id => {
  return dispatch => {
    CallAPI(`words?itemPerPage=20&page=${id}`, "GET", null, null, apiDevFast)
      .then(res =>
        dispatch({
          type: Actiontype.GET_WORDS_API_DEVFAST,
          dataWords: res.data
        })
      )
      .catch(err => {
        console.log(err);
      });
  };
};

export const addWordsApiDevfast = data => {
  let formData = new FormData();

  for (let key in data) {
    if (key === "video") {
      for (let i in data.video) {
        formData.append("video", data.video[i]);
      }
    } else {
      formData.append(key, data[key]);
    }
  }
  let a = formData.getAll("video");
  console.log(a);

  formData.append("video", JSON.stringify(a));

  return dispatch => {
    CallAPI("words", "POST", formData, null, apiDevFast)
      .then(res => {
        swal({
          title: "Good job!",
          text: `${res.statusText}!`,
          icon: "success",
          buttons: false,
          timer: 1500
        });
        dispatch(
          {
            type: Actiontype.ADD_WORDS_API_DEVFAST,
            word: res.data
          },
          console.log(res.data)
        );
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Error",
            text: ` ${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
        console.log(err);
      });
  };
};

export const actOnEditWord = () => {
  return dispatch => {
    dispatch({ type: Actiontype.EDIT_WORD, word: null });
  };
};

export const actGetEditWord = data => {
  return dispatch => {
    dispatch({ type: Actiontype.GET_EDIT_WORD, word: data });
  };
};

export const actEditWordAPI = data => {
  let formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return dispatch => {
    CallAPI(`words/${data.id}`, "PUT", formData, null, apiDevFast)
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
            type: Actiontype.EDIT_WORDS_API_DEVFAST,
            word: res.data
          },
          console.log(res)
        );
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Error",
            text: ` ${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
      });
  };
};

export const actDelWordAPI = id => {
  return dispatch => {
    CallAPI(`words/${id}`, "DELETE", null, null, apiDevFast)
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
          type: Actiontype.DEL_WORDS_API_DEVFAST,
          idWord: res.data.data._id
        });
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Error",
            text: ` ${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
        console.log(err);
      });
  };
};

// login

export const actloginAdmin = (user, history) => {
  return dispatch => {
    CallAPI(`/login`, "POST", user, null)
      .then(result => {
        sessionStorage.setItem("userAdmin", JSON.stringify(result.data));
        history.push("admin-dashboard");
        console.log(result.data);
        dispatch({
          type: Actiontype.ADMIN_LOGIN,
          ADMIN_LOGIN: ""
        });
      })
      .catch(err => {
        console.log(err);
        localStorage.removeItem("userAdmin");
        dispatch({
          type: Actiontype.ADMIN_LOGIN,
          ADMIN_LOGIN: "Dang nhap khong thanh cong"
        });
        setTimeout(() => {
          swal({
            title: "Tài khoản hoặc mật khẩu không đúng!",
            text: "bạn xem lại!",
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
      });
  };
};

//Term

export const getInfoWebsiteApi = name => {
  return dispatch => {
    CallAPI(`staticContent/${name}`, "GET", null, null, apiDevFast)
      .then(res => {
        switch (name) {
          case "TERM":
            return dispatch({
              type: Actiontype.GET_TERM_API_DEVFAST,
              dataTerm: res.data
            });
          case "INTRO":
            return dispatch({
              type: Actiontype.GET_INTRO_API_DEVFAST,
              dataIntro: res.data
            });
          case "CONTACT":
            return dispatch({
              type: Actiontype.GET_CONTACT_API_DEVFAST,
              dataContact: res.data
            });
          default:
            break;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addInfoWebsiteApi = (name, data) => {
  console.log(data);
  return dispatch => {
    CallAPI(`staticContent/${name}`, "PUT", data, null, apiDevFast)
      .then(res => {
        switch (name) {
          case "TERM":
            swal({
              title: "Good job!",
              text: `${res.statusText}!`,
              icon: "success",
              buttons: false,
              timer: 1500
            });
            return dispatch({
              type: Actiontype.ADD_TERM_API_DEVFAST,
              dataTerm: res.data
            });

          case "INTRO":
            swal({
              title: "Good job!",
              text: `${res.statusText}!`,
              icon: "success",
              buttons: false,
              timer: 1500
            });
            return dispatch({
              type: Actiontype.ADD_INTRO_API_DEVFAST,
              dataIntro: res.data
            });

          case "CONTACT":
            swal({
              title: "Good job!",
              text: `${res.statusText}!`,
              icon: "success",
              buttons: false,
              timer: 1500
            });
            return dispatch(
              {
                type: Actiontype.ADD_CONTACT_API_DEVFAST,
                dataContact: res.data
              },
              console.log(res.data)
            );

          default:
            break;
        }
      })
      .catch(err => {
        swal({
          title: "Error",
          text: ` ${err.response.data.error}!`,
          icon: "error",
          buttons: false,
          timer: 1500
        });
      });
  };
};
