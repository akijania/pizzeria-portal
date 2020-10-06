import React from 'react';
import {shallow} from 'enzyme';
import MainLayout from './MainLayout';

describe('Component MainLayout', () => {
    
  it('should render without crashing', () => {
    const component = shallow(<MainLayout />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<MainLayout />);
    expect(component.exists('PageNav')).toEqual(true);
  });
});