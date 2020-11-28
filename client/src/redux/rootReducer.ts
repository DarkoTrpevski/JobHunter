import { combineReducers } from 'redux';
import jobsReducer from './jobs/jobsReducer'
import userReducer from './user/userReducer'


const rootReducer = combineReducers({
  jobsReducer: jobsReducer,
  userReducer: userReducer
});

export default rootReducer;