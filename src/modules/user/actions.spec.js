import createStore from 'redux-zero';
import Chance from 'chance';

import actions from './actions';

describe('Test actions interactions unit', () => {
  let store, chance = new Chance();

  beforeEach(() => {
    store = createStore();
    jest.resetModules();
  });

  it('Set username', () => {
    const userNameStub = chance.string();
    const result = actions(store).setUsername(undefined, userNameStub);

    expect(result).toMatchObject({ userName: userNameStub });
  });

  it('Create user', async () => {
    const userNameStub = chance.name();
    const currentUserStub = {};
    const createUserMock = jest.fn(() => currentUserStub);
    jest.doMock('./services', () => ({ createUser: createUserMock }));

    const actions = require('./actions').default;
    const result = await actions(store).createUser({ userName: userNameStub });

    expect(createUserMock).toBeCalledWith(userNameStub);
    expect(result.currentUser).toBe(currentUserStub);
  });
});
