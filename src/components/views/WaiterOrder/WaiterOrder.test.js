import React from 'react';
import { shallow } from 'enzyme';
import WaiterOrder from './WaiterOrder';

describe('Component WaiterOrder', () => {
  it('should render without crashing', () => {
    const component = shallow(<WaiterOrder />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<WaiterOrder />);
    expect(component.exists('h2')).toEqual(true);
  });
});
