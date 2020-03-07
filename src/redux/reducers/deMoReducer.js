import * as ActionType from "../constants/actionType";

let initialState = {
  dataSearch: []
};
const deMoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA_SEARCH:
      state.dataSearch = action.dataSearch;
      return { ...state };
    default:
      return { ...state };
  }
};
export default deMoReducer;
