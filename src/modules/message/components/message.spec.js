import React from 'react';
import { shallow } from 'enzyme';

import Message from './message';

describe('Message component unit', () => {
  it('Snapshot test', () => {
    const wrapper = shallow(<Message
      message={[]}
      createMessage={ jest.fn() }
      setMessageContent={ jest.fn() }
      messageContent=""
    />);

    expect(wrapper).toMatchSnapshot();
  });
});
