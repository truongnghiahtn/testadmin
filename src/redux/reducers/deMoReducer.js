import * as ActionType from "../constants/actionType";

let initialState = {
  dataSearch: [],
  traCau: [],
  traTu: [],
  phuDePhim: {},
  video: {}
};
const deMoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA_SEARCH:
      state.dataSearch = action.dataSearch;
      return { ...state };
    case ActionType.GET_TRA_CAU_API:
      state.traCau = action.traCau.sentences;
      state.traTu = action.traCau.tratu[0].fields.fulltext
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
    default:
      return { ...state };
  }
};
export default deMoReducer;
