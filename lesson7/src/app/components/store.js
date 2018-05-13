import { createStore, combineReducers, applyMiddleware } from 'redux';

import { commentsReducer } from './commentsReducer';

import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

const middleware = applyMiddleware(promise(), logger());
const reducers = combineReducers(
    {
        comments: commentsReducer
    }
);
const store = createStore(reducers, middleware);
export default store;