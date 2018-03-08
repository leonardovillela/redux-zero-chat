import { isEmpty, property } from 'lodash';
import { composeP } from 'ramda';

import shared from '../shared';
import apiRoutes from './apiRoutes';

import utils from '../../utils';

async function generateNewId() {
  const { data } = (await shared.apiClient.get(apiRoutes.lastUser));
  return isEmpty(data) ? 0 : data[0].id + 1;
}

async function sendUser(userName) {
  const newId = await generateNewId();

  return shared.apiClient.post(apiRoutes.index, { name: userName, id: newId })
    .then(property('data'));
}

export default {
  createUser: composeP(
    utils.localStorage.setJSONData.bind(this, 'currentUser'),
    sendUser,
  )
}
