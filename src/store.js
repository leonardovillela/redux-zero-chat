import createStore from 'redux-zero';
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';

const INITIAL_STATE = {
  users: [],
  messages: [],
  currentUser: JSON.parse(localStorage.getItem('currentUser') || '{}'),
};

const middlewares = connect ? applyMiddleware(connect(INITIAL_STATE)) : [];

export default createStore(INITIAL_STATE, middlewares);
