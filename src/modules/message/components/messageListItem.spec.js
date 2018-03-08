import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

describe('Test MessageListItem component unit', () => {
  const chance = new Chance();

  beforeAll(() => {
    jest.resetModules();
  });

  it('Check if dateFormatted is called', () => {
    const dateStub = chance.string();
    const formattedDateStub = chance.string();
    const dateFormatterMock = jest.fn(() => formattedDateStub);

    jest.doMock('../../../utils', () => ({ dateFormatter: { format: dateFormatterMock } }));
    const MessageListItem = require('./messageListItem').default;

    const wrapper = shallow(
      <MessageListItem
        createdAt={dateStub}
        content=""
        userName=""
      />
    );

    expect(dateFormatterMock).toBeCalledWith(dateStub);
    expect(wrapper.find('small').text()).toEqual(formattedDateStub);
  });
});
