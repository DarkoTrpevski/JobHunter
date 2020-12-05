import { combineReducers } from 'redux';
import alertReducer from './alert/alertReducer';
import jobsReducer from './jobs/jobsReducer';
import authReducer from './auth/authReducer';
import uiReducer from './ui/uiReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['authReducer', 'uiReducer']
}

const rootReducer = combineReducers({
  alertReducer: alertReducer,
  jobsReducer: jobsReducer,
  authReducer: authReducer,
  uiReducer: uiReducer
});

// export default rootReducer;

//Exporting modified rootReducer with persist capabilities
export default persistReducer(persistConfig, rootReducer);