import React from 'react';
import { shallow } from 'enzyme';
import NewBookedEvent from './NewBookedEvent';

describe('Component NewBookedEvent', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewBookedEvent />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<NewBookedEvent />);
    expect(component.exists('h2')).toEqual(true);
  });
});
