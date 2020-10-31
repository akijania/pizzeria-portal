import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';

describe('Component Waiter', () => {
  it('should render without crashing', () => {
    const component = shallow(<Waiter />);
    expect(component).toBeTruthy();
  });
});
