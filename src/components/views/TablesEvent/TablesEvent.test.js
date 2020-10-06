import React from 'react';
import { shallow } from 'enzyme';
import TablesEvent from './TablesEvent';

describe('Component TablesEvent', () => {
  it('should render without crashing', () => {
    const component = shallow(<TablesEvent />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<TablesEvent />);
    expect(component.exists('h2')).toEqual(true);
  });
});
