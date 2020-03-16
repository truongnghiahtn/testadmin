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

export const postContactApi = data => {
  return () => {
    CallAPI("customer", "POST", data).then(rs => {
      setTimeout(() => {
        swal({
          title: "gửi thành công",
          text: `Thành công`,
          icon: "success",
          buttons: false,
          timer: 1500
        });
      }, 150);
      console.log(rs);
    }).catch(rs=>{
      setTimeout(() => {
        swal({
          title: "Gửi thất bại",
          text: `thất bại!`,
          icon: "error",
          buttons: false,
          timer: 1500
        });
      }, 150);
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
  let formData = new FormData();

  for (let key in data) {
    formData.append(key, data[key]);
  }
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI("movies", "POST", formData, headers, apiDevFast)
        .then(res => {
          swal({
            title: "Thêm thành công!",
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
              title: "Thêm không thành công!",
              text: ` ${err.response.data.message}!`,
              icon: "error",
              buttons: false,
              timer: 1500
            });
          }, 150);
          console.log(err);
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
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
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(`movies/${data.id}`, "PUT", formData, headers, apiDevFast)
        .then(res => {
          setTimeout(() => {
            swal({
              title: "Sửa thành công!",
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
              title: "Sửa không thành công!",
              text: ` ${err.response.data.message}!`,
              icon: "error",
              buttons: false,
              timer: 1500
            });
          }, 150);
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

export const actDelMovieAPI = id => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(`movies/${id}`, "DELETE", null, headers, apiDevFast)
        .then(res => {
          setTimeout(() => {
            swal({
              title: "Xóa thành công!",
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
              title: "Xóa không thành công!",
              text: ` ${err.response.data.message}!`,
              icon: "error",
              buttons: false,
              timer: 1500
            });
          }, 150);
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
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
    formData.append(key, data[key]);
  }

  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI("words", "POST", formData, headers, apiDevFast)
        .then(res => {
          swal({
            title: "Thêm thành công!",
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
          swal({
            title: "Thêm không thành công!",
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
          console.log(err);
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
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
  console.log(data);

  let formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(`words/${data.id}`, "PUT", formData, headers, apiDevFast)
        .then(res => {
          swal({
            title: "Sửa thành công!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
          dispatch(
            {
              type: Actiontype.EDIT_WORDS_API_DEVFAST,
              word: res.data
            },
            console.log(res)
          );
        })
        .catch(err => {
          swal({
            title: "Sửa không thành công!",
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

export const actDelWordAPI = id => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(`words/${id}`, "DELETE", null, headers, apiDevFast)
        .then(res => {
          swal({
            title: "Xóa Thành công!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
          dispatch({
            type: Actiontype.DEL_WORDS_API_DEVFAST,
            idWord: res.data.data
          });
          console.log(res.data.data);
        })
        .catch(err => {
          swal({
            title: "Xóa không thành công!",
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
          console.log(err);
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
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
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(`staticContent/${name}`, "PUT", data, headers, apiDevFast)
        .then(res => {
          switch (name) {
            case "TERM":
              swal({
                title: "Sửa thành công!",
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
                title: "Sửa thành công!",
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
                title: "Sửa thành công!",
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
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        });
    }
  };
};

//Customer Admin

export const getCustomerApiDevfast = id => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(
        `customer?itemPerPage=20&page=${id}`,
        "GET",
        null,
        headers,
        apiDevFast
      )
        .then(res =>
          dispatch({
            type: Actiontype.GET_CUSTOMER_API_DEVFAST,
            dataCustomer: res.data
          })
        )
        .catch(err => {
          console.log(err);
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

export const actDelCustomerAPI = id => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(`customer/${id}`, "DELETE", null, headers, apiDevFast)
        .then(res => {
          swal({
            title: "Xóa Thành công!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
          dispatch({
            type: Actiontype.DEL_CUSTOMER_API_DEVFAST,
            idCustomer: res.data.data._id
          });
        })
        .catch(err => {
          swal({
            title: "Xóa không thành công!",
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
          console.log(err);
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

//Admin
export const getAdminApiDevfast = id => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(
        `admin?itemPerPage=20&page=${id}`,
        "GET",
        null,
        headers,
        apiDevFast
      )
        .then(res =>
          dispatch({
            type: Actiontype.GET_ADMIN_API_DEVFAST,
            dataAdmin: res.data
          })
        )
        .catch(err => {
          console.log(err);
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

export const addAdminApiDevfast = data => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI("admin", "POST", data, headers, apiDevFast)
        .then(res => {
          swal({
            title: "Thêm thành công!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
          dispatch({
            type: Actiontype.ADD_ADMIN_API_DEVFAST,
            admin: res.data
          });
        })
        .catch(err => {
          swal({
            title: "Thêm không thành công!",
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

export const actOnEditAdmin = () => {
  return dispatch => {
    dispatch({ type: Actiontype.EDIT_ADMIN, admin: null });
  };
};

export const actGetEditAdmin = data => {
  return dispatch => {
    dispatch({ type: Actiontype.GET_EDIT_ADMIN, admin: data });
  };
};

export const actEditAdminAPI = data => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      console.log(data);

      CallAPI(`admin/${data.id}`, "PUT", data, headers, apiDevFast)
        .then(res => {
          swal({
            title: "Sửa thành công!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
          dispatch({
            type: Actiontype.EDIT_ADMIN_API_DEVFAST,
            admin: res.data
          });
          console.log(res.data);
        })
        .catch(err => {
          swal({
            title: "Sửa không thành công!",
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

export const actDelAdminAPI = id => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(`admin/${id}`, "DELETE", null, headers, apiDevFast)
        .then(res => {
          swal({
            title: "Xóa thành công!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
          dispatch({
            type: Actiontype.DEL_ADMIN_API_DEVFAST,
            idAdmin: res.data.data._id
          });
        })
        .catch(err => {
          swal({
            title: "Xóa không thành công!",
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

//words unapproved

export const getWordsUnapprovedApiDevfast = id => {
  return dispatch => {
    CallAPI(
      `contribute/unapproved?itemPerPage=20&page=${id}`,
      "GET",
      null,
      null,
      apiDevFast
    )
      .then(res =>
        dispatch({
          type: Actiontype.GET_WORDS_UNAPPROVED_API_DEVFAST,
          dataWords: res.data
        })
      )
      .catch(err => {
        console.log(err);
      });
  };
};

export const actAppovedWordAPI = data => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(
        `words/${data.id}`,
        "PUT",
        { status: data.status },
        headers,
        apiDevFast
      )
        .then(res => {
          swal({
            title: "Duyệt thành công!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
          dispatch(
            {
              type: Actiontype.APPROVED_WORD_API,
              word: res.data
            },
            console.log(res.data)
          );
        })
        .catch(err => {
          swal({
            title: "Duyệt không thành công!",
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

//excel

export const addExcelApiDevfast = file => {
  let formData = new FormData();
  formData.append("file", file);

  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI("excel", "POST", formData, headers, apiDevFast)
        .then(res => {
          swal({
            title: "Gửi thành công!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        })
        .catch(err => {
          swal({
            title: "Gửi không thành công!",
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

//email

export const getMailApiDevfast = id => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(`email`, "GET", null, headers, apiDevFast)
        .then(res =>
          dispatch({
            type: Actiontype.GET_MAIL_API_DEVFAST,
            dataMail: res.data
          })
        )
        .catch(err => {
          console.log(err);
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};

export const actEditMailAPI = data => {
  return dispatch => {
    const authToken = JSON.parse(sessionStorage.getItem("userAdmin"));
    if (authToken) {
      let headers = {
        Authorization: authToken.access_token
      };
      CallAPI(`email/${data._id}`, "PUT", data, headers, apiDevFast)
        .then(res => {
          swal({
            title: "Sửa thành công!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
          dispatch(
            {
              type: Actiontype.EDIT_MAIL_API_DEVFAST,
              mail: res.data
            },
            console.log(res.data)
          );
        })
        .catch(err => {
          swal({
            title: "Error",
            text: ` ${err.response.data.message}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        });
    } else {
      swal({
        title: "Error",
        text: `Unauthorized`,
        icon: "error",
        buttons: false,
        timer: 1500
      });
    }
  };
};