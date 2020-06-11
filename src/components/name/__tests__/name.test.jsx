import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Name from '../Name';

describe('<Name />', () => {
  it('<Name />', () => {
    const data = {
      name: 'Gentleman',
      genre: 'action',
      time: '113 min',
      stars: 10,
    };
    const wrapper = shallow(<Name dataFilm={data} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
