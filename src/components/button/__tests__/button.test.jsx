import React from 'react';
/* eslint-disable */
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

/* eslint-enable */
import Button from '../button';

describe('<Button />', () => {
  it('1th', () => {
    expect(true).toBeTruthy();
  });

  // it('2th', () => {
  //   const data = 'text';
  //   const fn = jest.fn();
  //   Button(data, fn);
  //   expect(fn).toBeCalled();
  // });
  it('renders an `text`', () => {
    const data = 'text';
    const fn = jest.fn();
    const wrapper = shallow(<Button text={data} onClick={fn} />);
    expect(wrapper.find('text')).to.have.lengthOf(1);
  });
});
