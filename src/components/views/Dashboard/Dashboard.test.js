import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('Component Dashboard', () => {
  it('should render without crashing', () => {
    const component = shallow(<Dashboard />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<Dashboard />);
    expect(component.exists('h2')).toEqual(true);
  });
});
