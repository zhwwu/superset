/* eslint-disable no-unused-expressions */
import React from 'react';
import Select, { Creatable } from 'react-select';
import sinon from 'sinon';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { shallow } from 'enzyme';
import SelectControl from '../../../../javascripts/explorev2/components/controls/SelectControl';

const defaultProps = {
  choices: [[10, 10], [20, 20]],
  name: 'row_limit',
  label: 'Row Limit',
  onChange: sinon.spy(),
};

describe('SelectControl', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SelectControl {...defaultProps} />);
  });

  it('renders a Select', () => {
    expect(wrapper.find(Select)).to.have.lengthOf(1);
  });

  it('calls onChange when toggled', () => {
    const select = wrapper.find(Select);
    select.simulate('change', { value: 50 });
    expect(defaultProps.onChange.calledWith(50)).to.be.true;
  });

  it('renders a Creatable for freeform', () => {
    wrapper = shallow(<SelectControl {...defaultProps} freeForm />);
    expect(wrapper.find(Creatable)).to.have.lengthOf(1);
  });
});
