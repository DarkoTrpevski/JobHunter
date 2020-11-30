import { combineReducers } from 'redux';
import jobsReducer from './jobs/jobsReducer';
import userReducer from './user/userReducer';
import uiReducer from './ui/uiReducer';


const rootReducer = combineReducers({
  jobsReducer: jobsReducer,
  userReducer: userReducer,
  uiReducer: uiReducer
});

export default rootReducer;