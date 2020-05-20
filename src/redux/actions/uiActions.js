import { uiActions } from "../types"; //Action Creator
export const openDrawer = () => ({
  type: uiActions.OPEN_DRAWER,
});

export const closeDrawer = () => ({
  type: uiActions.CLOSE_DRAWER,
});
