import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Component Login', () => {
  it('should render without crashing', () => {
    const component = shallow(<Login />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<Login />);
    expect(component.exists('h2')).toEqual(true);
  });
});
