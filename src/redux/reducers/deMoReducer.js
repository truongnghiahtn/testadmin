import * as ActionType from "../constants/actionType";

let initialState = {
  dataSearch: [],
  traCau: {},
  phuDePhim: {},
  video: {},
  dataMovies: {},
  editMovie: null
};
const deMoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA_SEARCH:
      state.dataSearch = action.dataSearch;
      return { ...state };
    case ActionType.GET_TRA_CAU_API:
      state.traCau = action.traCau;
      return { ...state };
    case ActionType.GET_PHU_DE_PHIM_API:
      state.phuDePhim = action.phuDePhim;
      return { ...state };
    case ActionType.GET_VIDEO_API:
      state.video = action.video;
      return { ...state };
    case ActionType.GET_MOVIES_API_DEVFAST:
      state.dataMovies = action.dataMovies;
      return { ...state };
    case ActionType.EDIT_MOVIE:
      state.editMovie = action.movie;
      return { ...state };
    case ActionType.GET_EDIT_MOVIE:
      state.editMovie = action.movie;
      return { ...state };
    case ActionType.DEL_MOVIES_API_DEVFAST:
      let totalItem = state.dataMovies.pagination.totalItem - 1;
      let result = state.dataMovies.result.filter(
        item => action.idMovie !== item._id
      );
      let pagination = { ...state.dataMovies.pagination, totalItem };
      let dataMovies = { ...state.dataMovies, pagination, result };
      state.dataMovies = { ...dataMovies };
      return { ...state };
    case ActionType.ADD_MOVIES_API_DEVFAST:
      let totalItem1 = state.dataMovies.pagination.totalItem + 1;
      let pagination1 = {
        ...state.dataMovies.pagination,
        totalItem: totalItem1
      };
      let result1 = state.dataMovies.result;
      result1.splice(0, 0, action.movie);
      state.dataMovies = {
        ...state.dataMovies,
        pagination: pagination1,
        result: result1
      };
      return { ...state };
    case ActionType.EDIT_MOVIES_API_DEVFAST:
      let index = state.dataMovies.result.findIndex(
        item => item._id === action.movie._id
      );
      let listMoviesUpdate = state.dataMovies.result;
      if (index !== -1) {
        listMoviesUpdate[index] = action.movie;
      }
      state.dataMovies = { ...state.dataMovies, result: listMoviesUpdate };
      return { ...state };
    default:
      return { ...state };
  }
};
export default deMoReducer;
