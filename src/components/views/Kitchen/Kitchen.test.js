import React from 'react';
import { shallow } from 'enzyme';
import Kitchen from './Kitchen';

describe('Component Kitchen', () => {
  it('should render without crashing', () => {
    const component = shallow(<Kitchen />);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const component = shallow(<Kitchen />);
    expect(component.exists('h2')).toEqual(true);
  });
});
