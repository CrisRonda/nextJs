import { uiActions } from "../types";
const initialState = {
  openDrawer: false,
};
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActions.CLOSE_DRAWER:
      return { ...state, openDrawer: false };
    case uiActions.OPEN_DRAWER:
      return { ...state, openDrawer: true };
    default:
      return state;
  }
};

export default uiReducer;
