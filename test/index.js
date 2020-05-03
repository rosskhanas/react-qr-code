import "jsdom-global/register";
import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QRCode from "../src";

Enzyme.configure({ adapter: new Adapter() });

describe("<QRCode /> shallow rendering", () => {
  it("has 441 children", () => {
    const wrapper = shallow(<QRCode value="hey" />);
    expect(wrapper.children()).to.have.length(441);
  });
});
