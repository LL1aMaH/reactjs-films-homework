import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Search from '../Search';

describe('<Search />', () => {
  it('<Search />', () => {
    const wrapper = shallow(<Search />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
