import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from "redux-persist";
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {};
const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers);
const store: Store = createStore(rootReducer, initialState, composedEnhancers);

export const persistor = persistStore(store);
export default store;