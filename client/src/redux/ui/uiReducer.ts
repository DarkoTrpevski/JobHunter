import { UIAction, UIState } from '../types/types';
import { SET_DARK_MODE } from './uiActionsTypes';

const initialState = {
  darkMode: false
  //TREBA DA PROVERIME NA SEKOJ APP RELOAD(REFRESH) DALI E DARK ILI LIGHT
}

const uiReducer = (state: UIState = initialState, action: UIAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: payload
      }
    default:
      return state;
  }
}

export default uiReducer;