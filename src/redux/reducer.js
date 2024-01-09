import { combineReducers } from 'redux';
import posts from './reducers/posts';
import authUser from './reducers/authUser';
import common from './reducers/common';
//import { routerReducer } from 'react-router-redux'; ==> OLD
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    router: connectRouter(history),
    posts,
    authUser,
    common
  });