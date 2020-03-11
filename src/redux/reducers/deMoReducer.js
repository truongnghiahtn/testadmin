import * as ActionType from "../constants/actionType";

let initialState = {
  dataSearch: [],
  traCau: [],
  traTu: [],
  phuDePhim: {},
  video: {},
  dataMovies: {},
  editMovie: null,
  word: "",
  dataWords: {},
  dataAllWords: {},
  editWord: null,
  ADMIN_LOGIN: "",
  dataIntro: "",
  dataTerm: ""
};

const deMoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA_SEARCH:
      state.dataSearch = action.dataSearch;
      return { ...state };
    case ActionType.SAVE_WORD:
      state.word = action.word;
      return { ...state };
    case ActionType.GET_TRA_CAU_API:
      state.traCau = action.traCau;
      return { ...state };
    case ActionType.GET_TRA_TU_API:
      state.traTu = action.traTu.fields.fulltext
        .split("</article>")
        .map(item => item + "</article>");
      state.traTu.splice(state.traTu.length - 1, state.traTu.length);
      return { ...state };
    case ActionType.GET_PHU_DE_PHIM_API:
      state.phuDePhim = action.phuDePhim;
      return { ...state };
    case ActionType.GET_VIDEO_API:
      state.video = action.video;
      return { ...state };
    case ActionType.GET_INTRO:
      state.dataIntro = action.dataIntro;
      return { ...state };
    case ActionType.GET_TERM:
      state.dataTerm = action.dataTerm;
      return { ...state };
    //Movies
    case ActionType.GET_ALL_WORDS_API_DEVFAST:
      state.dataAllWords = action.dataWords;
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

    //Words
    case ActionType.GET_WORDS_API_DEVFAST:
      state.dataWords = action.dataWords;
      return { ...state };
    case ActionType.EDIT_WORD:
      state.editWord = action.word;
      return { ...state };
    case ActionType.GET_EDIT_WORD:
      state.editWord = action.word;
      return { ...state };
    case ActionType.DEL_WORDS_API_DEVFAST:
      let totalItemWords = state.dataWords.pagination.totalItem - 1;
      let resultWords = state.dataWords.result.filter(
        item => action.idWord !== item._id
      );
      let resulAlltWords = state.dataAllWords.result.filter(
        item => action.idWord !== item._id
      );
      let paginationWord = {
        ...state.dataWords.pagination,
        totalItem: totalItemWords
      };
      let dataWords = {
        ...state.dataWords,
        pagination: paginationWord,
        result: resultWords
      };
      state.dataAllWords = {
        ...state.dataAllWords,
        pagination: paginationWord,
        result: resulAlltWords
      };
      state.dataWords = { ...dataWords };
      return { ...state };
    case ActionType.ADD_WORDS_API_DEVFAST:
      let totalItemWords1 = state.dataWords.pagination.totalItem + 1;
      let paginationWords1 = {
        ...state.dataWords.pagination,
        totalItem: totalItemWords1
      };
      let paginationAllWords1 = {
        ...state.dataWords.pagination,
        totalItem: totalItemWords1
      };
      let resultWords1 = state.dataWords.result;
      let resulAlltWords1 = state.dataAllWords.result;
      resultWords1.splice(0, 0, action.word);
      resulAlltWords1.splice(0, 0, action.word);
      state.dataWords = {
        ...state.dataWords,
        pagination: paginationWords1,
        result: resultWords1
      };
      state.dataAllWords = {
        ...state.dataAllWords,
        pagination: paginationAllWords1,
        result: resulAlltWords1
      };
      return { ...state };
    case ActionType.EDIT_WORDS_API_DEVFAST:
      let stt = state.dataAllWords.result.findIndex(
        item => item._id === action.word._id
      );
      let stt2 = state.dataWords.result.findIndex(
        item => item._id === action.word._id
      );
      let listWordsUpdate = state.dataWords.result;
      let listAllWordsUpdate = state.dataAllWords.result;
      if (stt !== -1) {
        listAllWordsUpdate[stt] = action.word;
      }

      if (stt2 !== -1) {
        listWordsUpdate[stt2] = action.word;
      }
      state.dataAllWords = {
        ...state.dataAllWords,
        result: listAllWordsUpdate
      };
      state.dataWords = {
        ...state.dataWords,
        result: listWordsUpdate
      };
      return { ...state };
    case ActionType.ADMIN_LOGIN:
      state.ADMIN_LOGIN = action.ADMIN_LOGIN;
      console.log(state.ADMIN_LOGIN);
      return { ...state };
    default:
      return { ...state };
  }
};
export default deMoReducer;
