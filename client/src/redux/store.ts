import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const initialState = {};
const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers);
const store: Store = createStore(rootReducer, initialState, composedEnhancers);
export default store;


// import thunk from "redux-thunk";
// import reducer from "./reducer";
// const store: Store<ArticleState, ArticleAction> & {dispatch: DispatchType} =
// createStore(reducer, applyMiddleware(thunk))
// export default store;
// import { createStore, applyMiddleware } from 'redux';