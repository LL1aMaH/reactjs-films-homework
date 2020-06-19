import React from 'react';
/* eslint-disable */
import { shallow } from 'enzyme';

/* eslint-enable */
import Button from '../Button';

describe('<Button />', () => {
  it('<should be clicked and have right text/>', () => {
    const name = 'name';
    const fn = jest.fn();
    const wrapper = shallow(<Button text={name} onClick={fn} />);
    wrapper.simulate('click');
    expect(fn).toBeCalled();
    expect(wrapper.find('button').text()).toEqual('name');
  });
});
