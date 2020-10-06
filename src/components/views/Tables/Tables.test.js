import React from 'react';
import { shallow } from 'enzyme';
import Tables from './Tables';

describe('Component Tables', () => {
  it('should render without crashing', () => {
    const component = shallow(<Tables />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<Tables />);
    expect(component.exists('h2')).toEqual(true);
  });
});
