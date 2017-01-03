import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import QRCode from '../src';

describe('<QRCode /> shallow rendering', () => {
  it('has 441 children', () => {
    const wrapper = shallow(<QRCode value="hey" />);
    expect(wrapper.children()).to.have.length(441);
  });
});

describe('<QRCode /> full DOM rendering', () => {
  it('has 1 children', () => {
    const wrapper = mount(<QRCode value="hey" />);
    expect(wrapper.children()).to.have.length(0);
  });
});
