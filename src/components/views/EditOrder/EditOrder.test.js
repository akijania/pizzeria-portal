import React from 'react';
import { shallow } from 'enzyme';
import NewOrder from './EditOrder';

describe('Component NewOrder', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewOrder />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<NewOrder />);
    expect(component.exists('h2')).toEqual(true);
  });
});
