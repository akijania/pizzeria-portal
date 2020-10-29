import React from 'react';
import { shallow } from 'enzyme';
import BookedEvent from './BookedEvent';

describe('Component BookedEvent', () => {
  it('should render without crashing', () => {
    const component = shallow(<BookedEvent />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<BookedEvent />);
    expect(component.exists('h2')).toEqual(true);
  });
});
