import createStore from 'redux-zero';
import { applyMiddleware } from 'redux-zero/middleware';
import { connect } from 'redux-zero/devtools';

import { getJSONData } from './utils'

const INITIAL_STATE = {
  users: [],
  messages: [],
  currentUser: getJSONData('currentUser'),
};

const middlewares = connect ? applyMiddleware(connect(INITIAL_STATE)) : [];

export default createStore(INITIAL_STATE, middlewares);
