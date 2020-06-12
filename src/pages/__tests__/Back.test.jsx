import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Back from '../Back';

describe('<Back />', () => {
  it('<Back />', () => {
    const wrapper = shallow(<Back />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
