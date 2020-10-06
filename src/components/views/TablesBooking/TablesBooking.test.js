import React from 'react';
import { shallow } from 'enzyme';
import TablesBooking from './TablesBooking';

describe('Component TablesBooking', () => {
  it('should render without crashing', () => {
    const component = shallow(<TablesBooking />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<TablesBooking />);
    expect(component.exists('h2')).toEqual(true);
  });
});
