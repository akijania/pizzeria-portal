import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';

describe('Component Waiter', () => {
  it('should render without crashing', () => {
    const component = shallow(<Waiter />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<Waiter />);
    expect(component.exists('h2')).toEqual(true);
  });
});
