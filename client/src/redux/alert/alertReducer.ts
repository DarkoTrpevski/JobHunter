import { AlertAction, AlertState } from '../types/types';
import { SET_ALERT, REMOVE_ALERT } from './alertTypes';

const initialState: AlertState = [];

export default function(state = initialState, action: AlertAction) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}